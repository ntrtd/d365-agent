/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { DiscussionSignOffs } from './DiscussionSignOffs';

/**
 * Request builder class for operations supported on the {@link DiscussionSignOffs} entity.
 */
export class DiscussionSignOffsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscussionSignOffs<T>, T> {
  /**
   * Returns a request builder for querying all `DiscussionSignOffs` entities.
   * @returns A request builder for creating requests to retrieve all `DiscussionSignOffs` entities.
   */
  getAll(): GetAllRequestBuilder<DiscussionSignOffs<T>, T> {
    return new GetAllRequestBuilder<DiscussionSignOffs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DiscussionSignOffs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscussionSignOffs`.
   */
  create(
    entity: DiscussionSignOffs<T>
  ): CreateRequestBuilder<DiscussionSignOffs<T>, T> {
    return new CreateRequestBuilder<DiscussionSignOffs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DiscussionSignOffs` entity based on its keys.
   * @param discussionId Key property. See {@link DiscussionSignOffs.discussionId}.
   * @param signOffWorkerPersonnelNumber Key property. See {@link DiscussionSignOffs.signOffWorkerPersonnelNumber}.
   * @param discussionWorkerPersonnelNumber Key property. See {@link DiscussionSignOffs.discussionWorkerPersonnelNumber}.
   * @returns A request builder for creating requests to retrieve one `DiscussionSignOffs` entity based on its keys.
   */
  getByKey(
    discussionId: DeserializedType<T, 'Edm.String'>,
    signOffWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>,
    discussionWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DiscussionSignOffs<T>, T> {
    return new GetByKeyRequestBuilder<DiscussionSignOffs<T>, T>(
      this.entityApi,
      {
        DiscussionId: discussionId,
        SignOffWorkerPersonnelNumber: signOffWorkerPersonnelNumber,
        DiscussionWorkerPersonnelNumber: discussionWorkerPersonnelNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DiscussionSignOffs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscussionSignOffs`.
   */
  update(
    entity: DiscussionSignOffs<T>
  ): UpdateRequestBuilder<DiscussionSignOffs<T>, T> {
    return new UpdateRequestBuilder<DiscussionSignOffs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscussionSignOffs`.
   * @param discussionId Key property. See {@link DiscussionSignOffs.discussionId}.
   * @param signOffWorkerPersonnelNumber Key property. See {@link DiscussionSignOffs.signOffWorkerPersonnelNumber}.
   * @param discussionWorkerPersonnelNumber Key property. See {@link DiscussionSignOffs.discussionWorkerPersonnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `DiscussionSignOffs`.
   */
  delete(
    discussionId: string,
    signOffWorkerPersonnelNumber: string,
    discussionWorkerPersonnelNumber: string
  ): DeleteRequestBuilder<DiscussionSignOffs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscussionSignOffs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscussionSignOffs` by taking the entity as a parameter.
   */
  delete(
    entity: DiscussionSignOffs<T>
  ): DeleteRequestBuilder<DiscussionSignOffs<T>, T>;
  delete(
    discussionIdOrEntity: any,
    signOffWorkerPersonnelNumber?: string,
    discussionWorkerPersonnelNumber?: string
  ): DeleteRequestBuilder<DiscussionSignOffs<T>, T> {
    return new DeleteRequestBuilder<DiscussionSignOffs<T>, T>(
      this.entityApi,
      discussionIdOrEntity instanceof DiscussionSignOffs
        ? discussionIdOrEntity
        : {
            DiscussionId: discussionIdOrEntity!,
            SignOffWorkerPersonnelNumber: signOffWorkerPersonnelNumber!,
            DiscussionWorkerPersonnelNumber: discussionWorkerPersonnelNumber!
          }
    );
  }
}
