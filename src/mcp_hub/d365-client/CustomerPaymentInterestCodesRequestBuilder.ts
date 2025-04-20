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
import { CustomerPaymentInterestCodes } from './CustomerPaymentInterestCodes';

/**
 * Request builder class for operations supported on the {@link CustomerPaymentInterestCodes} entity.
 */
export class CustomerPaymentInterestCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerPaymentInterestCodes<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerPaymentInterestCodes` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerPaymentInterestCodes` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerPaymentInterestCodes<T>, T> {
    return new GetAllRequestBuilder<CustomerPaymentInterestCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerPaymentInterestCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerPaymentInterestCodes`.
   */
  create(
    entity: CustomerPaymentInterestCodes<T>
  ): CreateRequestBuilder<CustomerPaymentInterestCodes<T>, T> {
    return new CreateRequestBuilder<CustomerPaymentInterestCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerPaymentInterestCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerPaymentInterestCodes.dataAreaId}.
   * @param interestCode Key property. See {@link CustomerPaymentInterestCodes.interestCode}.
   * @returns A request builder for creating requests to retrieve one `CustomerPaymentInterestCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    interestCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerPaymentInterestCodes<T>, T> {
    return new GetByKeyRequestBuilder<CustomerPaymentInterestCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InterestCode: interestCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerPaymentInterestCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerPaymentInterestCodes`.
   */
  update(
    entity: CustomerPaymentInterestCodes<T>
  ): UpdateRequestBuilder<CustomerPaymentInterestCodes<T>, T> {
    return new UpdateRequestBuilder<CustomerPaymentInterestCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerPaymentInterestCodes`.
   * @param dataAreaId Key property. See {@link CustomerPaymentInterestCodes.dataAreaId}.
   * @param interestCode Key property. See {@link CustomerPaymentInterestCodes.interestCode}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPaymentInterestCodes`.
   */
  delete(
    dataAreaId: string,
    interestCode: string
  ): DeleteRequestBuilder<CustomerPaymentInterestCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerPaymentInterestCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPaymentInterestCodes` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerPaymentInterestCodes<T>
  ): DeleteRequestBuilder<CustomerPaymentInterestCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    interestCode?: string
  ): DeleteRequestBuilder<CustomerPaymentInterestCodes<T>, T> {
    return new DeleteRequestBuilder<CustomerPaymentInterestCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerPaymentInterestCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InterestCode: interestCode!
          }
    );
  }
}
