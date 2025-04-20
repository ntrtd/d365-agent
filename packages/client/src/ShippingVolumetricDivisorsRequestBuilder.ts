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
import { ShippingVolumetricDivisors } from './ShippingVolumetricDivisors';

/**
 * Request builder class for operations supported on the {@link ShippingVolumetricDivisors} entity.
 */
export class ShippingVolumetricDivisorsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShippingVolumetricDivisors<T>, T> {
  /**
   * Returns a request builder for querying all `ShippingVolumetricDivisors` entities.
   * @returns A request builder for creating requests to retrieve all `ShippingVolumetricDivisors` entities.
   */
  getAll(): GetAllRequestBuilder<ShippingVolumetricDivisors<T>, T> {
    return new GetAllRequestBuilder<ShippingVolumetricDivisors<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ShippingVolumetricDivisors` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShippingVolumetricDivisors`.
   */
  create(
    entity: ShippingVolumetricDivisors<T>
  ): CreateRequestBuilder<ShippingVolumetricDivisors<T>, T> {
    return new CreateRequestBuilder<ShippingVolumetricDivisors<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShippingVolumetricDivisors` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShippingVolumetricDivisors.dataAreaId}.
   * @param shippingVendorAccountNumber Key property. See {@link ShippingVolumetricDivisors.shippingVendorAccountNumber}.
   * @param landedCostTypeCode Key property. See {@link ShippingVolumetricDivisors.landedCostTypeCode}.
   * @param fromShippingPortCode Key property. See {@link ShippingVolumetricDivisors.fromShippingPortCode}.
   * @returns A request builder for creating requests to retrieve one `ShippingVolumetricDivisors` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shippingVendorAccountNumber: DeserializedType<T, 'Edm.String'>,
    landedCostTypeCode: DeserializedType<T, 'Edm.String'>,
    fromShippingPortCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShippingVolumetricDivisors<T>, T> {
    return new GetByKeyRequestBuilder<ShippingVolumetricDivisors<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShippingVendorAccountNumber: shippingVendorAccountNumber,
        LandedCostTypeCode: landedCostTypeCode,
        FromShippingPortCode: fromShippingPortCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShippingVolumetricDivisors`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShippingVolumetricDivisors`.
   */
  update(
    entity: ShippingVolumetricDivisors<T>
  ): UpdateRequestBuilder<ShippingVolumetricDivisors<T>, T> {
    return new UpdateRequestBuilder<ShippingVolumetricDivisors<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShippingVolumetricDivisors`.
   * @param dataAreaId Key property. See {@link ShippingVolumetricDivisors.dataAreaId}.
   * @param shippingVendorAccountNumber Key property. See {@link ShippingVolumetricDivisors.shippingVendorAccountNumber}.
   * @param landedCostTypeCode Key property. See {@link ShippingVolumetricDivisors.landedCostTypeCode}.
   * @param fromShippingPortCode Key property. See {@link ShippingVolumetricDivisors.fromShippingPortCode}.
   * @returns A request builder for creating requests that delete an entity of type `ShippingVolumetricDivisors`.
   */
  delete(
    dataAreaId: string,
    shippingVendorAccountNumber: string,
    landedCostTypeCode: string,
    fromShippingPortCode: string
  ): DeleteRequestBuilder<ShippingVolumetricDivisors<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShippingVolumetricDivisors`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShippingVolumetricDivisors` by taking the entity as a parameter.
   */
  delete(
    entity: ShippingVolumetricDivisors<T>
  ): DeleteRequestBuilder<ShippingVolumetricDivisors<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shippingVendorAccountNumber?: string,
    landedCostTypeCode?: string,
    fromShippingPortCode?: string
  ): DeleteRequestBuilder<ShippingVolumetricDivisors<T>, T> {
    return new DeleteRequestBuilder<ShippingVolumetricDivisors<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShippingVolumetricDivisors
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShippingVendorAccountNumber: shippingVendorAccountNumber!,
            LandedCostTypeCode: landedCostTypeCode!,
            FromShippingPortCode: fromShippingPortCode!
          }
    );
  }
}
