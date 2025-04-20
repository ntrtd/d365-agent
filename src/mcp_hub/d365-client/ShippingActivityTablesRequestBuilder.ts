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
import { ShippingActivityTables } from './ShippingActivityTables';

/**
 * Request builder class for operations supported on the {@link ShippingActivityTables} entity.
 */
export class ShippingActivityTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShippingActivityTables<T>, T> {
  /**
   * Returns a request builder for querying all `ShippingActivityTables` entities.
   * @returns A request builder for creating requests to retrieve all `ShippingActivityTables` entities.
   */
  getAll(): GetAllRequestBuilder<ShippingActivityTables<T>, T> {
    return new GetAllRequestBuilder<ShippingActivityTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ShippingActivityTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShippingActivityTables`.
   */
  create(
    entity: ShippingActivityTables<T>
  ): CreateRequestBuilder<ShippingActivityTables<T>, T> {
    return new CreateRequestBuilder<ShippingActivityTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShippingActivityTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShippingActivityTables.dataAreaId}.
   * @param activityId Key property. See {@link ShippingActivityTables.activityId}.
   * @returns A request builder for creating requests to retrieve one `ShippingActivityTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    activityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShippingActivityTables<T>, T> {
    return new GetByKeyRequestBuilder<ShippingActivityTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ActivityId: activityId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShippingActivityTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShippingActivityTables`.
   */
  update(
    entity: ShippingActivityTables<T>
  ): UpdateRequestBuilder<ShippingActivityTables<T>, T> {
    return new UpdateRequestBuilder<ShippingActivityTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShippingActivityTables`.
   * @param dataAreaId Key property. See {@link ShippingActivityTables.dataAreaId}.
   * @param activityId Key property. See {@link ShippingActivityTables.activityId}.
   * @returns A request builder for creating requests that delete an entity of type `ShippingActivityTables`.
   */
  delete(
    dataAreaId: string,
    activityId: string
  ): DeleteRequestBuilder<ShippingActivityTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShippingActivityTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShippingActivityTables` by taking the entity as a parameter.
   */
  delete(
    entity: ShippingActivityTables<T>
  ): DeleteRequestBuilder<ShippingActivityTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    activityId?: string
  ): DeleteRequestBuilder<ShippingActivityTables<T>, T> {
    return new DeleteRequestBuilder<ShippingActivityTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShippingActivityTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ActivityId: activityId!
          }
    );
  }
}
