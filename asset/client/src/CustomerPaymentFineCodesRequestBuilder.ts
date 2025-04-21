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
import { CustomerPaymentFineCodes } from './CustomerPaymentFineCodes';

/**
 * Request builder class for operations supported on the {@link CustomerPaymentFineCodes} entity.
 */
export class CustomerPaymentFineCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerPaymentFineCodes<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerPaymentFineCodes` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerPaymentFineCodes` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerPaymentFineCodes<T>, T> {
    return new GetAllRequestBuilder<CustomerPaymentFineCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerPaymentFineCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerPaymentFineCodes`.
   */
  create(
    entity: CustomerPaymentFineCodes<T>
  ): CreateRequestBuilder<CustomerPaymentFineCodes<T>, T> {
    return new CreateRequestBuilder<CustomerPaymentFineCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerPaymentFineCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerPaymentFineCodes.dataAreaId}.
   * @param fineCode Key property. See {@link CustomerPaymentFineCodes.fineCode}.
   * @returns A request builder for creating requests to retrieve one `CustomerPaymentFineCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fineCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerPaymentFineCodes<T>, T> {
    return new GetByKeyRequestBuilder<CustomerPaymentFineCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FineCode: fineCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerPaymentFineCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerPaymentFineCodes`.
   */
  update(
    entity: CustomerPaymentFineCodes<T>
  ): UpdateRequestBuilder<CustomerPaymentFineCodes<T>, T> {
    return new UpdateRequestBuilder<CustomerPaymentFineCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerPaymentFineCodes`.
   * @param dataAreaId Key property. See {@link CustomerPaymentFineCodes.dataAreaId}.
   * @param fineCode Key property. See {@link CustomerPaymentFineCodes.fineCode}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPaymentFineCodes`.
   */
  delete(
    dataAreaId: string,
    fineCode: string
  ): DeleteRequestBuilder<CustomerPaymentFineCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerPaymentFineCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPaymentFineCodes` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerPaymentFineCodes<T>
  ): DeleteRequestBuilder<CustomerPaymentFineCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fineCode?: string
  ): DeleteRequestBuilder<CustomerPaymentFineCodes<T>, T> {
    return new DeleteRequestBuilder<CustomerPaymentFineCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerPaymentFineCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FineCode: fineCode!
          }
    );
  }
}
