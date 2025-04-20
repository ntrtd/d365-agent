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
import { CustomerAffiliations } from './CustomerAffiliations';

/**
 * Request builder class for operations supported on the {@link CustomerAffiliations} entity.
 */
export class CustomerAffiliationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerAffiliations<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerAffiliations` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerAffiliations` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerAffiliations<T>, T> {
    return new GetAllRequestBuilder<CustomerAffiliations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomerAffiliations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerAffiliations`.
   */
  create(
    entity: CustomerAffiliations<T>
  ): CreateRequestBuilder<CustomerAffiliations<T>, T> {
    return new CreateRequestBuilder<CustomerAffiliations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerAffiliations` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerAffiliations.dataAreaId}.
   * @param customerAccount Key property. See {@link CustomerAffiliations.customerAccount}.
   * @param retailAffiliationName Key property. See {@link CustomerAffiliations.retailAffiliationName}.
   * @returns A request builder for creating requests to retrieve one `CustomerAffiliations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    customerAccount: DeserializedType<T, 'Edm.String'>,
    retailAffiliationName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerAffiliations<T>, T> {
    return new GetByKeyRequestBuilder<CustomerAffiliations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CustomerAccount: customerAccount,
        RetailAffiliationName: retailAffiliationName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerAffiliations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerAffiliations`.
   */
  update(
    entity: CustomerAffiliations<T>
  ): UpdateRequestBuilder<CustomerAffiliations<T>, T> {
    return new UpdateRequestBuilder<CustomerAffiliations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerAffiliations`.
   * @param dataAreaId Key property. See {@link CustomerAffiliations.dataAreaId}.
   * @param customerAccount Key property. See {@link CustomerAffiliations.customerAccount}.
   * @param retailAffiliationName Key property. See {@link CustomerAffiliations.retailAffiliationName}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerAffiliations`.
   */
  delete(
    dataAreaId: string,
    customerAccount: string,
    retailAffiliationName: string
  ): DeleteRequestBuilder<CustomerAffiliations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerAffiliations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerAffiliations` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerAffiliations<T>
  ): DeleteRequestBuilder<CustomerAffiliations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    customerAccount?: string,
    retailAffiliationName?: string
  ): DeleteRequestBuilder<CustomerAffiliations<T>, T> {
    return new DeleteRequestBuilder<CustomerAffiliations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerAffiliations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CustomerAccount: customerAccount!,
            RetailAffiliationName: retailAffiliationName!
          }
    );
  }
}
