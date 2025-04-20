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
import { CustomerCreditGroupLines } from './CustomerCreditGroupLines';

/**
 * Request builder class for operations supported on the {@link CustomerCreditGroupLines} entity.
 */
export class CustomerCreditGroupLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerCreditGroupLines<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerCreditGroupLines` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerCreditGroupLines` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerCreditGroupLines<T>, T> {
    return new GetAllRequestBuilder<CustomerCreditGroupLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerCreditGroupLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerCreditGroupLines`.
   */
  create(
    entity: CustomerCreditGroupLines<T>
  ): CreateRequestBuilder<CustomerCreditGroupLines<T>, T> {
    return new CreateRequestBuilder<CustomerCreditGroupLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerCreditGroupLines` entity based on its keys.
   * @param company Key property. See {@link CustomerCreditGroupLines.company}.
   * @param custAccount Key property. See {@link CustomerCreditGroupLines.custAccount}.
   * @returns A request builder for creating requests to retrieve one `CustomerCreditGroupLines` entity based on its keys.
   */
  getByKey(
    company: DeserializedType<T, 'Edm.String'>,
    custAccount: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerCreditGroupLines<T>, T> {
    return new GetByKeyRequestBuilder<CustomerCreditGroupLines<T>, T>(
      this.entityApi,
      {
        Company: company,
        CustAccount: custAccount
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerCreditGroupLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerCreditGroupLines`.
   */
  update(
    entity: CustomerCreditGroupLines<T>
  ): UpdateRequestBuilder<CustomerCreditGroupLines<T>, T> {
    return new UpdateRequestBuilder<CustomerCreditGroupLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerCreditGroupLines`.
   * @param company Key property. See {@link CustomerCreditGroupLines.company}.
   * @param custAccount Key property. See {@link CustomerCreditGroupLines.custAccount}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerCreditGroupLines`.
   */
  delete(
    company: string,
    custAccount: string
  ): DeleteRequestBuilder<CustomerCreditGroupLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerCreditGroupLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerCreditGroupLines` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerCreditGroupLines<T>
  ): DeleteRequestBuilder<CustomerCreditGroupLines<T>, T>;
  delete(
    companyOrEntity: any,
    custAccount?: string
  ): DeleteRequestBuilder<CustomerCreditGroupLines<T>, T> {
    return new DeleteRequestBuilder<CustomerCreditGroupLines<T>, T>(
      this.entityApi,
      companyOrEntity instanceof CustomerCreditGroupLines
        ? companyOrEntity
        : {
            Company: companyOrEntity!,
            CustAccount: custAccount!
          }
    );
  }
}
