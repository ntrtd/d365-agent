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
import { StoreHoursTemplates } from './StoreHoursTemplates';

/**
 * Request builder class for operations supported on the {@link StoreHoursTemplates} entity.
 */
export class StoreHoursTemplatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<StoreHoursTemplates<T>, T> {
  /**
   * Returns a request builder for querying all `StoreHoursTemplates` entities.
   * @returns A request builder for creating requests to retrieve all `StoreHoursTemplates` entities.
   */
  getAll(): GetAllRequestBuilder<StoreHoursTemplates<T>, T> {
    return new GetAllRequestBuilder<StoreHoursTemplates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `StoreHoursTemplates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `StoreHoursTemplates`.
   */
  create(
    entity: StoreHoursTemplates<T>
  ): CreateRequestBuilder<StoreHoursTemplates<T>, T> {
    return new CreateRequestBuilder<StoreHoursTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `StoreHoursTemplates` entity based on its keys.
   * @param dataAreaId Key property. See {@link StoreHoursTemplates.dataAreaId}.
   * @param id Key property. See {@link StoreHoursTemplates.id}.
   * @returns A request builder for creating requests to retrieve one `StoreHoursTemplates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<StoreHoursTemplates<T>, T> {
    return new GetByKeyRequestBuilder<StoreHoursTemplates<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Id: id
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `StoreHoursTemplates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `StoreHoursTemplates`.
   */
  update(
    entity: StoreHoursTemplates<T>
  ): UpdateRequestBuilder<StoreHoursTemplates<T>, T> {
    return new UpdateRequestBuilder<StoreHoursTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `StoreHoursTemplates`.
   * @param dataAreaId Key property. See {@link StoreHoursTemplates.dataAreaId}.
   * @param id Key property. See {@link StoreHoursTemplates.id}.
   * @returns A request builder for creating requests that delete an entity of type `StoreHoursTemplates`.
   */
  delete(
    dataAreaId: string,
    id: string
  ): DeleteRequestBuilder<StoreHoursTemplates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `StoreHoursTemplates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `StoreHoursTemplates` by taking the entity as a parameter.
   */
  delete(
    entity: StoreHoursTemplates<T>
  ): DeleteRequestBuilder<StoreHoursTemplates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    id?: string
  ): DeleteRequestBuilder<StoreHoursTemplates<T>, T> {
    return new DeleteRequestBuilder<StoreHoursTemplates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof StoreHoursTemplates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Id: id!
          }
    );
  }
}
