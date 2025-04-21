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
import { WriteOffFinancialReasonsSetups } from './WriteOffFinancialReasonsSetups';

/**
 * Request builder class for operations supported on the {@link WriteOffFinancialReasonsSetups} entity.
 */
export class WriteOffFinancialReasonsSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WriteOffFinancialReasonsSetups<T>, T> {
  /**
   * Returns a request builder for querying all `WriteOffFinancialReasonsSetups` entities.
   * @returns A request builder for creating requests to retrieve all `WriteOffFinancialReasonsSetups` entities.
   */
  getAll(): GetAllRequestBuilder<WriteOffFinancialReasonsSetups<T>, T> {
    return new GetAllRequestBuilder<WriteOffFinancialReasonsSetups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WriteOffFinancialReasonsSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WriteOffFinancialReasonsSetups`.
   */
  create(
    entity: WriteOffFinancialReasonsSetups<T>
  ): CreateRequestBuilder<WriteOffFinancialReasonsSetups<T>, T> {
    return new CreateRequestBuilder<WriteOffFinancialReasonsSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WriteOffFinancialReasonsSetups` entity based on its keys.
   * @param company Key property. See {@link WriteOffFinancialReasonsSetups.company}.
   * @param writeOffReason Key property. See {@link WriteOffFinancialReasonsSetups.writeOffReason}.
   * @returns A request builder for creating requests to retrieve one `WriteOffFinancialReasonsSetups` entity based on its keys.
   */
  getByKey(
    company: DeserializedType<T, 'Edm.String'>,
    writeOffReason: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WriteOffFinancialReasonsSetups<T>, T> {
    return new GetByKeyRequestBuilder<WriteOffFinancialReasonsSetups<T>, T>(
      this.entityApi,
      {
        Company: company,
        WriteOffReason: writeOffReason
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WriteOffFinancialReasonsSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WriteOffFinancialReasonsSetups`.
   */
  update(
    entity: WriteOffFinancialReasonsSetups<T>
  ): UpdateRequestBuilder<WriteOffFinancialReasonsSetups<T>, T> {
    return new UpdateRequestBuilder<WriteOffFinancialReasonsSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WriteOffFinancialReasonsSetups`.
   * @param company Key property. See {@link WriteOffFinancialReasonsSetups.company}.
   * @param writeOffReason Key property. See {@link WriteOffFinancialReasonsSetups.writeOffReason}.
   * @returns A request builder for creating requests that delete an entity of type `WriteOffFinancialReasonsSetups`.
   */
  delete(
    company: string,
    writeOffReason: string
  ): DeleteRequestBuilder<WriteOffFinancialReasonsSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WriteOffFinancialReasonsSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WriteOffFinancialReasonsSetups` by taking the entity as a parameter.
   */
  delete(
    entity: WriteOffFinancialReasonsSetups<T>
  ): DeleteRequestBuilder<WriteOffFinancialReasonsSetups<T>, T>;
  delete(
    companyOrEntity: any,
    writeOffReason?: string
  ): DeleteRequestBuilder<WriteOffFinancialReasonsSetups<T>, T> {
    return new DeleteRequestBuilder<WriteOffFinancialReasonsSetups<T>, T>(
      this.entityApi,
      companyOrEntity instanceof WriteOffFinancialReasonsSetups
        ? companyOrEntity
        : {
            Company: companyOrEntity!,
            WriteOffReason: writeOffReason!
          }
    );
  }
}
