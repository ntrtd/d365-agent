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
import { RetailStatementTransBiEntities } from './RetailStatementTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailStatementTransBiEntities} entity.
 */
export class RetailStatementTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailStatementTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailStatementTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailStatementTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<RetailStatementTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<RetailStatementTransBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailStatementTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailStatementTransBiEntities`.
   */
  create(
    entity: RetailStatementTransBiEntities<T>
  ): CreateRequestBuilder<RetailStatementTransBiEntities<T>, T> {
    return new CreateRequestBuilder<RetailStatementTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailStatementTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailStatementTransBiEntities.dataAreaId}.
   * @param statementId Key property. See {@link RetailStatementTransBiEntities.statementId}.
   * @param lineNum Key property. See {@link RetailStatementTransBiEntities.lineNum}.
   * @returns A request builder for creating requests to retrieve one `RetailStatementTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    statementId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailStatementTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<RetailStatementTransBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        statementId: statementId,
        lineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailStatementTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailStatementTransBiEntities`.
   */
  update(
    entity: RetailStatementTransBiEntities<T>
  ): UpdateRequestBuilder<RetailStatementTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<RetailStatementTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailStatementTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailStatementTransBiEntities.dataAreaId}.
   * @param statementId Key property. See {@link RetailStatementTransBiEntities.statementId}.
   * @param lineNum Key property. See {@link RetailStatementTransBiEntities.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `RetailStatementTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    statementId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<RetailStatementTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailStatementTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailStatementTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailStatementTransBiEntities<T>
  ): DeleteRequestBuilder<RetailStatementTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    statementId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<RetailStatementTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<RetailStatementTransBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailStatementTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            statementId: statementId!,
            lineNum: lineNum!
          }
    );
  }
}
