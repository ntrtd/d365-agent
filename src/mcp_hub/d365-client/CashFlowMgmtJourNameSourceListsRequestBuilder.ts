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
import { CashFlowMgmtJourNameSourceLists } from './CashFlowMgmtJourNameSourceLists';
import { CfmJournalTransSourceType } from './CfmJournalTransSourceType';
import { CfmCashFlowDirection } from './CfmCashFlowDirection';

/**
 * Request builder class for operations supported on the {@link CashFlowMgmtJourNameSourceLists} entity.
 */
export class CashFlowMgmtJourNameSourceListsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CashFlowMgmtJourNameSourceLists<T>, T> {
  /**
   * Returns a request builder for querying all `CashFlowMgmtJourNameSourceLists` entities.
   * @returns A request builder for creating requests to retrieve all `CashFlowMgmtJourNameSourceLists` entities.
   */
  getAll(): GetAllRequestBuilder<CashFlowMgmtJourNameSourceLists<T>, T> {
    return new GetAllRequestBuilder<CashFlowMgmtJourNameSourceLists<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CashFlowMgmtJourNameSourceLists` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CashFlowMgmtJourNameSourceLists`.
   */
  create(
    entity: CashFlowMgmtJourNameSourceLists<T>
  ): CreateRequestBuilder<CashFlowMgmtJourNameSourceLists<T>, T> {
    return new CreateRequestBuilder<CashFlowMgmtJourNameSourceLists<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CashFlowMgmtJourNameSourceLists` entity based on its keys.
   * @param dataAreaId Key property. See {@link CashFlowMgmtJourNameSourceLists.dataAreaId}.
   * @param name Key property. See {@link CashFlowMgmtJourNameSourceLists.name}.
   * @param journalDataSource Key property. See {@link CashFlowMgmtJourNameSourceLists.journalDataSource}.
   * @param direction Key property. See {@link CashFlowMgmtJourNameSourceLists.direction}.
   * @returns A request builder for creating requests to retrieve one `CashFlowMgmtJourNameSourceLists` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>,
    journalDataSource: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CFMJournalTransSourceType'
    >,
    direction: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CFMCashFlowDirection'
    >
  ): GetByKeyRequestBuilder<CashFlowMgmtJourNameSourceLists<T>, T> {
    return new GetByKeyRequestBuilder<CashFlowMgmtJourNameSourceLists<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Name: name,
        JournalDataSource: journalDataSource,
        Direction: direction
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CashFlowMgmtJourNameSourceLists`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CashFlowMgmtJourNameSourceLists`.
   */
  update(
    entity: CashFlowMgmtJourNameSourceLists<T>
  ): UpdateRequestBuilder<CashFlowMgmtJourNameSourceLists<T>, T> {
    return new UpdateRequestBuilder<CashFlowMgmtJourNameSourceLists<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CashFlowMgmtJourNameSourceLists`.
   * @param dataAreaId Key property. See {@link CashFlowMgmtJourNameSourceLists.dataAreaId}.
   * @param name Key property. See {@link CashFlowMgmtJourNameSourceLists.name}.
   * @param journalDataSource Key property. See {@link CashFlowMgmtJourNameSourceLists.journalDataSource}.
   * @param direction Key property. See {@link CashFlowMgmtJourNameSourceLists.direction}.
   * @returns A request builder for creating requests that delete an entity of type `CashFlowMgmtJourNameSourceLists`.
   */
  delete(
    dataAreaId: string,
    name: string,
    journalDataSource: CfmJournalTransSourceType,
    direction: CfmCashFlowDirection
  ): DeleteRequestBuilder<CashFlowMgmtJourNameSourceLists<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CashFlowMgmtJourNameSourceLists`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CashFlowMgmtJourNameSourceLists` by taking the entity as a parameter.
   */
  delete(
    entity: CashFlowMgmtJourNameSourceLists<T>
  ): DeleteRequestBuilder<CashFlowMgmtJourNameSourceLists<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string,
    journalDataSource?: CfmJournalTransSourceType,
    direction?: CfmCashFlowDirection
  ): DeleteRequestBuilder<CashFlowMgmtJourNameSourceLists<T>, T> {
    return new DeleteRequestBuilder<CashFlowMgmtJourNameSourceLists<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CashFlowMgmtJourNameSourceLists
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!,
            JournalDataSource: journalDataSource!,
            Direction: direction!
          }
    );
  }
}
