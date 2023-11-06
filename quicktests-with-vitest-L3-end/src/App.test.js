import { mount, flushPromises } from "@vue/test-utils";
import axios from "axios";

import App from "./App.vue";
import {describe, expect, test, vi} from "vitest";

const mockPost = {
  userId: 1, //this is necessary for the API call
  id: 1,
  title: "Post 1",
  body: "Body 1",
};

describe("App", () => {
	test("user can create a new post", async () => {
		vi.spyOn(axios, "post").mockResolvedValueOnce({ data: mockPost });

		// mount the app
		const wrapper = mount(App);

		// fill in the input fields
		await wrapper.find('[data-testid="title-input"]').setValue(mockPost.title);
		await wrapper.find('[data-testid="body-input"]').setValue(mockPost.body);

		// submit the form
		await wrapper.find('[data-testid="post-form"]').trigger("submit");

		// assert that the submit button text changes
		expect(wrapper.find('[type="submit"]').html()).toContain("Creating...");

		await flushPromises();

		// assert that the created post is displayed
		expect(wrapper.html()).toContain(mockPost.title);
		expect(wrapper.html()).toContain(mockPost.body);
	  });

	  test("when attempting to create a post with incomplete fields", async () => {
		//mount the app
		const wrapper = mount(App);

		//try to submit the form without filling in the input fields
		await wrapper.find('[data-testid="post-form"]').trigger("submit");

	   // assert that the error on the notification component shows
	   expect(wrapper.html()).toContain("Please input post title");

	  // click the close button
	  await wrapper.find('[data-testid="close-notification"]').trigger("click");

	  // assert that the error message is no longer on the page
	  expect(wrapper.html()).not.toContain("Please input post title");
	  })

	  test("when attempting to create a post with incomplete fields", async () => {
		const wrapper = mount(App);

		//try to submit the form without filling in the input fields
		await wrapper.find('[data-testid="post-form"]').trigger("submit");

		//assert that the error on the notification component shows
		expect(wrapper.html()).toContain("Please input post title");

		// clear the error message
		await wrapper.find('[data-testid="close-notification"]').trigger("click");

		// check that the error message is no longer on the page
		expect(wrapper.html()).not.toContain("Please input post title");

		//fill in the title field
		await wrapper
		  .find('[data-testid="title-input"]')
		  .setValue(mockPost.title);

		//submit the form
		await wrapper.find('[data-testid="post-form"]').trigger("submit");

		//assert that the error message concerning the post body is on the page
		expect(wrapper.html()).toContain("Please input post body");
	  });
})
