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
import { WithholdParameters_In } from './WithholdParameters_In';

/**
 * Request builder class for operations supported on the {@link WithholdParameters_In} entity.
 */
export class WithholdParameters_InRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdParameters_In<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdParameters_In` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdParameters_In` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdParameters_In<T>, T> {
    return new GetAllRequestBuilder<WithholdParameters_In<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WithholdParameters_In` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdParameters_In`.
   */
  create(
    entity: WithholdParameters_In<T>
  ): CreateRequestBuilder<WithholdParameters_In<T>, T> {
    return new CreateRequestBuilder<WithholdParameters_In<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdParameters_In` entity based on its keys.
   * @param dataAreaId Key property. See {@link WithholdParameters_In.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `WithholdParameters_In` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WithholdParameters_In<T>, T> {
    return new GetByKeyRequestBuilder<WithholdParameters_In<T>, T>(
      this.entityApi,
      { dataAreaId: dataAreaId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdParameters_In`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdParameters_In`.
   */
  update(
    entity: WithholdParameters_In<T>
  ): UpdateRequestBuilder<WithholdParameters_In<T>, T> {
    return new UpdateRequestBuilder<WithholdParameters_In<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdParameters_In`.
   * @param dataAreaId Key property. See {@link WithholdParameters_In.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdParameters_In`.
   */
  delete(dataAreaId: string): DeleteRequestBuilder<WithholdParameters_In<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdParameters_In`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdParameters_In` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdParameters_In<T>
  ): DeleteRequestBuilder<WithholdParameters_In<T>, T>;
  delete(
    dataAreaIdOrEntity: any
  ): DeleteRequestBuilder<WithholdParameters_In<T>, T> {
    return new DeleteRequestBuilder<WithholdParameters_In<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WithholdParameters_In
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
