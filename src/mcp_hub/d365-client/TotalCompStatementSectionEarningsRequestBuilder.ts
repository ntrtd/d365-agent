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
import { TotalCompStatementSectionEarnings } from './TotalCompStatementSectionEarnings';

/**
 * Request builder class for operations supported on the {@link TotalCompStatementSectionEarnings} entity.
 */
export class TotalCompStatementSectionEarningsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TotalCompStatementSectionEarnings<T>, T> {
  /**
   * Returns a request builder for querying all `TotalCompStatementSectionEarnings` entities.
   * @returns A request builder for creating requests to retrieve all `TotalCompStatementSectionEarnings` entities.
   */
  getAll(): GetAllRequestBuilder<TotalCompStatementSectionEarnings<T>, T> {
    return new GetAllRequestBuilder<TotalCompStatementSectionEarnings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TotalCompStatementSectionEarnings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TotalCompStatementSectionEarnings`.
   */
  create(
    entity: TotalCompStatementSectionEarnings<T>
  ): CreateRequestBuilder<TotalCompStatementSectionEarnings<T>, T> {
    return new CreateRequestBuilder<TotalCompStatementSectionEarnings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TotalCompStatementSectionEarnings` entity based on its keys.
   * @param statementSectionId Key property. See {@link TotalCompStatementSectionEarnings.statementSectionId}.
   * @param earningCodeGroupId Key property. See {@link TotalCompStatementSectionEarnings.earningCodeGroupId}.
   * @param earningCodeId Key property. See {@link TotalCompStatementSectionEarnings.earningCodeId}.
   * @returns A request builder for creating requests to retrieve one `TotalCompStatementSectionEarnings` entity based on its keys.
   */
  getByKey(
    statementSectionId: DeserializedType<T, 'Edm.String'>,
    earningCodeGroupId: DeserializedType<T, 'Edm.String'>,
    earningCodeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TotalCompStatementSectionEarnings<T>, T> {
    return new GetByKeyRequestBuilder<TotalCompStatementSectionEarnings<T>, T>(
      this.entityApi,
      {
        StatementSectionId: statementSectionId,
        EarningCodeGroupId: earningCodeGroupId,
        EarningCodeId: earningCodeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TotalCompStatementSectionEarnings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TotalCompStatementSectionEarnings`.
   */
  update(
    entity: TotalCompStatementSectionEarnings<T>
  ): UpdateRequestBuilder<TotalCompStatementSectionEarnings<T>, T> {
    return new UpdateRequestBuilder<TotalCompStatementSectionEarnings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TotalCompStatementSectionEarnings`.
   * @param statementSectionId Key property. See {@link TotalCompStatementSectionEarnings.statementSectionId}.
   * @param earningCodeGroupId Key property. See {@link TotalCompStatementSectionEarnings.earningCodeGroupId}.
   * @param earningCodeId Key property. See {@link TotalCompStatementSectionEarnings.earningCodeId}.
   * @returns A request builder for creating requests that delete an entity of type `TotalCompStatementSectionEarnings`.
   */
  delete(
    statementSectionId: string,
    earningCodeGroupId: string,
    earningCodeId: string
  ): DeleteRequestBuilder<TotalCompStatementSectionEarnings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TotalCompStatementSectionEarnings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TotalCompStatementSectionEarnings` by taking the entity as a parameter.
   */
  delete(
    entity: TotalCompStatementSectionEarnings<T>
  ): DeleteRequestBuilder<TotalCompStatementSectionEarnings<T>, T>;
  delete(
    statementSectionIdOrEntity: any,
    earningCodeGroupId?: string,
    earningCodeId?: string
  ): DeleteRequestBuilder<TotalCompStatementSectionEarnings<T>, T> {
    return new DeleteRequestBuilder<TotalCompStatementSectionEarnings<T>, T>(
      this.entityApi,
      statementSectionIdOrEntity instanceof TotalCompStatementSectionEarnings
        ? statementSectionIdOrEntity
        : {
            StatementSectionId: statementSectionIdOrEntity!,
            EarningCodeGroupId: earningCodeGroupId!,
            EarningCodeId: earningCodeId!
          }
    );
  }
}
