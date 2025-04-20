/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { VendorSettlementTax1099S } from './VendorSettlementTax1099S';

/**
 * Request builder class for operations supported on the {@link VendorSettlementTax1099S} entity.
 */
export class VendorSettlementTax1099SRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorSettlementTax1099S<T>, T> {
  /**
   * Returns a request builder for querying all `VendorSettlementTax1099S` entities.
   * @returns A request builder for creating requests to retrieve all `VendorSettlementTax1099S` entities.
   */
  getAll(): GetAllRequestBuilder<VendorSettlementTax1099S<T>, T> {
    return new GetAllRequestBuilder<VendorSettlementTax1099S<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorSettlementTax1099S` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorSettlementTax1099S`.
   */
  create(
    entity: VendorSettlementTax1099S<T>
  ): CreateRequestBuilder<VendorSettlementTax1099S<T>, T> {
    return new CreateRequestBuilder<VendorSettlementTax1099S<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorSettlementTax1099S` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorSettlementTax1099S.dataAreaId}.
   * @param recordId Key property. See {@link VendorSettlementTax1099S.recordId}.
   * @returns A request builder for creating requests to retrieve one `VendorSettlementTax1099S` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<VendorSettlementTax1099S<T>, T> {
    return new GetByKeyRequestBuilder<VendorSettlementTax1099S<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RecordId: recordId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorSettlementTax1099S`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorSettlementTax1099S`.
   */
  update(
    entity: VendorSettlementTax1099S<T>
  ): UpdateRequestBuilder<VendorSettlementTax1099S<T>, T> {
    return new UpdateRequestBuilder<VendorSettlementTax1099S<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorSettlementTax1099S`.
   * @param dataAreaId Key property. See {@link VendorSettlementTax1099S.dataAreaId}.
   * @param recordId Key property. See {@link VendorSettlementTax1099S.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `VendorSettlementTax1099S`.
   */
  delete(
    dataAreaId: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<VendorSettlementTax1099S<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorSettlementTax1099S`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorSettlementTax1099S` by taking the entity as a parameter.
   */
  delete(
    entity: VendorSettlementTax1099S<T>
  ): DeleteRequestBuilder<VendorSettlementTax1099S<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recordId?: BigNumber
  ): DeleteRequestBuilder<VendorSettlementTax1099S<T>, T> {
    return new DeleteRequestBuilder<VendorSettlementTax1099S<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorSettlementTax1099S
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecordId: recordId!
          }
    );
  }
}
