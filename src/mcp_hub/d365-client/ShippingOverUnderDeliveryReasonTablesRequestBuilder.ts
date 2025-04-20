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
import { ShippingOverUnderDeliveryReasonTables } from './ShippingOverUnderDeliveryReasonTables';

/**
 * Request builder class for operations supported on the {@link ShippingOverUnderDeliveryReasonTables} entity.
 */
export class ShippingOverUnderDeliveryReasonTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShippingOverUnderDeliveryReasonTables<T>, T> {
  /**
   * Returns a request builder for querying all `ShippingOverUnderDeliveryReasonTables` entities.
   * @returns A request builder for creating requests to retrieve all `ShippingOverUnderDeliveryReasonTables` entities.
   */
  getAll(): GetAllRequestBuilder<ShippingOverUnderDeliveryReasonTables<T>, T> {
    return new GetAllRequestBuilder<
      ShippingOverUnderDeliveryReasonTables<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ShippingOverUnderDeliveryReasonTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShippingOverUnderDeliveryReasonTables`.
   */
  create(
    entity: ShippingOverUnderDeliveryReasonTables<T>
  ): CreateRequestBuilder<ShippingOverUnderDeliveryReasonTables<T>, T> {
    return new CreateRequestBuilder<
      ShippingOverUnderDeliveryReasonTables<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ShippingOverUnderDeliveryReasonTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShippingOverUnderDeliveryReasonTables.dataAreaId}.
   * @param reasonId Key property. See {@link ShippingOverUnderDeliveryReasonTables.reasonId}.
   * @returns A request builder for creating requests to retrieve one `ShippingOverUnderDeliveryReasonTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reasonId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShippingOverUnderDeliveryReasonTables<T>, T> {
    return new GetByKeyRequestBuilder<
      ShippingOverUnderDeliveryReasonTables<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ReasonId: reasonId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ShippingOverUnderDeliveryReasonTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShippingOverUnderDeliveryReasonTables`.
   */
  update(
    entity: ShippingOverUnderDeliveryReasonTables<T>
  ): UpdateRequestBuilder<ShippingOverUnderDeliveryReasonTables<T>, T> {
    return new UpdateRequestBuilder<
      ShippingOverUnderDeliveryReasonTables<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ShippingOverUnderDeliveryReasonTables`.
   * @param dataAreaId Key property. See {@link ShippingOverUnderDeliveryReasonTables.dataAreaId}.
   * @param reasonId Key property. See {@link ShippingOverUnderDeliveryReasonTables.reasonId}.
   * @returns A request builder for creating requests that delete an entity of type `ShippingOverUnderDeliveryReasonTables`.
   */
  delete(
    dataAreaId: string,
    reasonId: string
  ): DeleteRequestBuilder<ShippingOverUnderDeliveryReasonTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShippingOverUnderDeliveryReasonTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShippingOverUnderDeliveryReasonTables` by taking the entity as a parameter.
   */
  delete(
    entity: ShippingOverUnderDeliveryReasonTables<T>
  ): DeleteRequestBuilder<ShippingOverUnderDeliveryReasonTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reasonId?: string
  ): DeleteRequestBuilder<ShippingOverUnderDeliveryReasonTables<T>, T> {
    return new DeleteRequestBuilder<
      ShippingOverUnderDeliveryReasonTables<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShippingOverUnderDeliveryReasonTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReasonId: reasonId!
          }
    );
  }
}
