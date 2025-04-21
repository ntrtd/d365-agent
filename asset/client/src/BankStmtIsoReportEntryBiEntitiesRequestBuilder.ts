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
import { BankStmtIsoReportEntryBiEntities } from './BankStmtIsoReportEntryBiEntities';

/**
 * Request builder class for operations supported on the {@link BankStmtIsoReportEntryBiEntities} entity.
 */
export class BankStmtIsoReportEntryBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankStmtIsoReportEntryBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `BankStmtIsoReportEntryBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `BankStmtIsoReportEntryBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<BankStmtIsoReportEntryBiEntities<T>, T> {
    return new GetAllRequestBuilder<BankStmtIsoReportEntryBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BankStmtIsoReportEntryBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankStmtIsoReportEntryBiEntities`.
   */
  create(
    entity: BankStmtIsoReportEntryBiEntities<T>
  ): CreateRequestBuilder<BankStmtIsoReportEntryBiEntities<T>, T> {
    return new CreateRequestBuilder<BankStmtIsoReportEntryBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BankStmtIsoReportEntryBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankStmtIsoReportEntryBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link BankStmtIsoReportEntryBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `BankStmtIsoReportEntryBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<BankStmtIsoReportEntryBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<BankStmtIsoReportEntryBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BankStmtIsoReportEntryBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankStmtIsoReportEntryBiEntities`.
   */
  update(
    entity: BankStmtIsoReportEntryBiEntities<T>
  ): UpdateRequestBuilder<BankStmtIsoReportEntryBiEntities<T>, T> {
    return new UpdateRequestBuilder<BankStmtIsoReportEntryBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BankStmtIsoReportEntryBiEntities`.
   * @param dataAreaId Key property. See {@link BankStmtIsoReportEntryBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link BankStmtIsoReportEntryBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `BankStmtIsoReportEntryBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<BankStmtIsoReportEntryBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankStmtIsoReportEntryBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankStmtIsoReportEntryBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: BankStmtIsoReportEntryBiEntities<T>
  ): DeleteRequestBuilder<BankStmtIsoReportEntryBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<BankStmtIsoReportEntryBiEntities<T>, T> {
    return new DeleteRequestBuilder<BankStmtIsoReportEntryBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankStmtIsoReportEntryBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
