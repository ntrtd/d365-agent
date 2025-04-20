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
import { VendorPaymentInterestCodes } from './VendorPaymentInterestCodes';

/**
 * Request builder class for operations supported on the {@link VendorPaymentInterestCodes} entity.
 */
export class VendorPaymentInterestCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorPaymentInterestCodes<T>, T> {
  /**
   * Returns a request builder for querying all `VendorPaymentInterestCodes` entities.
   * @returns A request builder for creating requests to retrieve all `VendorPaymentInterestCodes` entities.
   */
  getAll(): GetAllRequestBuilder<VendorPaymentInterestCodes<T>, T> {
    return new GetAllRequestBuilder<VendorPaymentInterestCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorPaymentInterestCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorPaymentInterestCodes`.
   */
  create(
    entity: VendorPaymentInterestCodes<T>
  ): CreateRequestBuilder<VendorPaymentInterestCodes<T>, T> {
    return new CreateRequestBuilder<VendorPaymentInterestCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorPaymentInterestCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorPaymentInterestCodes.dataAreaId}.
   * @param interestCode Key property. See {@link VendorPaymentInterestCodes.interestCode}.
   * @returns A request builder for creating requests to retrieve one `VendorPaymentInterestCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    interestCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorPaymentInterestCodes<T>, T> {
    return new GetByKeyRequestBuilder<VendorPaymentInterestCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InterestCode: interestCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorPaymentInterestCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorPaymentInterestCodes`.
   */
  update(
    entity: VendorPaymentInterestCodes<T>
  ): UpdateRequestBuilder<VendorPaymentInterestCodes<T>, T> {
    return new UpdateRequestBuilder<VendorPaymentInterestCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorPaymentInterestCodes`.
   * @param dataAreaId Key property. See {@link VendorPaymentInterestCodes.dataAreaId}.
   * @param interestCode Key property. See {@link VendorPaymentInterestCodes.interestCode}.
   * @returns A request builder for creating requests that delete an entity of type `VendorPaymentInterestCodes`.
   */
  delete(
    dataAreaId: string,
    interestCode: string
  ): DeleteRequestBuilder<VendorPaymentInterestCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorPaymentInterestCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorPaymentInterestCodes` by taking the entity as a parameter.
   */
  delete(
    entity: VendorPaymentInterestCodes<T>
  ): DeleteRequestBuilder<VendorPaymentInterestCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    interestCode?: string
  ): DeleteRequestBuilder<VendorPaymentInterestCodes<T>, T> {
    return new DeleteRequestBuilder<VendorPaymentInterestCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorPaymentInterestCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InterestCode: interestCode!
          }
    );
  }
}
