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
import { WithholdingTypes } from './WithholdingTypes';

/**
 * Request builder class for operations supported on the {@link WithholdingTypes} entity.
 */
export class WithholdingTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdingTypes<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdingTypes` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdingTypes` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdingTypes<T>, T> {
    return new GetAllRequestBuilder<WithholdingTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WithholdingTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdingTypes`.
   */
  create(
    entity: WithholdingTypes<T>
  ): CreateRequestBuilder<WithholdingTypes<T>, T> {
    return new CreateRequestBuilder<WithholdingTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdingTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link WithholdingTypes.dataAreaId}.
   * @param code Key property. See {@link WithholdingTypes.code}.
   * @returns A request builder for creating requests to retrieve one `WithholdingTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WithholdingTypes<T>, T> {
    return new GetByKeyRequestBuilder<WithholdingTypes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Code: code
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdingTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdingTypes`.
   */
  update(
    entity: WithholdingTypes<T>
  ): UpdateRequestBuilder<WithholdingTypes<T>, T> {
    return new UpdateRequestBuilder<WithholdingTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdingTypes`.
   * @param dataAreaId Key property. See {@link WithholdingTypes.dataAreaId}.
   * @param code Key property. See {@link WithholdingTypes.code}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdingTypes`.
   */
  delete(
    dataAreaId: string,
    code: string
  ): DeleteRequestBuilder<WithholdingTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdingTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdingTypes` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdingTypes<T>
  ): DeleteRequestBuilder<WithholdingTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<WithholdingTypes<T>, T> {
    return new DeleteRequestBuilder<WithholdingTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WithholdingTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Code: code!
          }
    );
  }
}
