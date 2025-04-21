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
import { EarningStatements } from './EarningStatements';

/**
 * Request builder class for operations supported on the {@link EarningStatements} entity.
 */
export class EarningStatementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EarningStatements<T>, T> {
  /**
   * Returns a request builder for querying all `EarningStatements` entities.
   * @returns A request builder for creating requests to retrieve all `EarningStatements` entities.
   */
  getAll(): GetAllRequestBuilder<EarningStatements<T>, T> {
    return new GetAllRequestBuilder<EarningStatements<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EarningStatements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EarningStatements`.
   */
  create(
    entity: EarningStatements<T>
  ): CreateRequestBuilder<EarningStatements<T>, T> {
    return new CreateRequestBuilder<EarningStatements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EarningStatements` entity based on its keys.
   * @param company Key property. See {@link EarningStatements.company}.
   * @param earningsStatementNumber Key property. See {@link EarningStatements.earningsStatementNumber}.
   * @returns A request builder for creating requests to retrieve one `EarningStatements` entity based on its keys.
   */
  getByKey(
    company: DeserializedType<T, 'Edm.String'>,
    earningsStatementNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EarningStatements<T>, T> {
    return new GetByKeyRequestBuilder<EarningStatements<T>, T>(this.entityApi, {
      Company: company,
      EarningsStatementNumber: earningsStatementNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EarningStatements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EarningStatements`.
   */
  update(
    entity: EarningStatements<T>
  ): UpdateRequestBuilder<EarningStatements<T>, T> {
    return new UpdateRequestBuilder<EarningStatements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EarningStatements`.
   * @param company Key property. See {@link EarningStatements.company}.
   * @param earningsStatementNumber Key property. See {@link EarningStatements.earningsStatementNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EarningStatements`.
   */
  delete(
    company: string,
    earningsStatementNumber: string
  ): DeleteRequestBuilder<EarningStatements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EarningStatements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EarningStatements` by taking the entity as a parameter.
   */
  delete(
    entity: EarningStatements<T>
  ): DeleteRequestBuilder<EarningStatements<T>, T>;
  delete(
    companyOrEntity: any,
    earningsStatementNumber?: string
  ): DeleteRequestBuilder<EarningStatements<T>, T> {
    return new DeleteRequestBuilder<EarningStatements<T>, T>(
      this.entityApi,
      companyOrEntity instanceof EarningStatements
        ? companyOrEntity
        : {
            Company: companyOrEntity!,
            EarningsStatementNumber: earningsStatementNumber!
          }
    );
  }
}
