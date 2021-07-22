import React from "react";
import Authenticated from "../Layouts/Authenticated";
import Card from "../Components/Card";

export default function Dashboard(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Dashboard built using <span class="text-blue-600">React</span>
        </h2>
      }
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow-sm sm:rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
            <div className="p-6 bg-white border-gray-200 rounded-lg">
              You're logged in!
            </div>
            <Card>
              <p>This is a card build using React</p>
              <a href={route("vue.dashboard")} className="underline">
                Go to Vue dashboard page
              </a>
            </Card>
          </div>
        </div>
      </div>
    </Authenticated>
  );
}
