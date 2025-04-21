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
import { CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers } from './CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers';

/**
 * Request builder class for operations supported on the {@link CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers} entity.
 */
export class CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<T>,
  T
> {
  /**
   * Returns a request builder for querying all `CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers` entities.
   * @returns A request builder for creating requests to retrieve all `CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers`.
   */
  create(
    entity: CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<T>
  ): CreateRequestBuilder<
    CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<T>,
    T
  > {
    return new CreateRequestBuilder<
      CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers` entity based on its keys.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers.dataConnectorSystemInstanceSurrogateKey}.
   * @param generalLedgerEntrySourceIdentifier Key property. See {@link CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers.generalLedgerEntrySourceIdentifier}.
   * @param dataConnectorCostObjectDimensionName Key property. See {@link CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers.dataConnectorCostObjectDimensionName}.
   * @param costObjectDimensionMemberName Key property. See {@link CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers.costObjectDimensionMemberName}.
   * @returns A request builder for creating requests to retrieve one `CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers` entity based on its keys.
   */
  getByKey(
    dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>,
    generalLedgerEntrySourceIdentifier: DeserializedType<T, 'Edm.String'>,
    dataConnectorCostObjectDimensionName: DeserializedType<T, 'Edm.String'>,
    costObjectDimensionMemberName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<T>,
      T
    >(this.entityApi, {
      DataConnectorSystemInstanceSurrogateKey:
        dataConnectorSystemInstanceSurrogateKey,
      GeneralLedgerEntrySourceIdentifier: generalLedgerEntrySourceIdentifier,
      DataConnectorCostObjectDimensionName:
        dataConnectorCostObjectDimensionName,
      CostObjectDimensionMemberName: costObjectDimensionMemberName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers`.
   */
  update(
    entity: CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<T>
  ): UpdateRequestBuilder<
    CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<T>,
    T
  > {
    return new UpdateRequestBuilder<
      CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers`.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers.dataConnectorSystemInstanceSurrogateKey}.
   * @param generalLedgerEntrySourceIdentifier Key property. See {@link CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers.generalLedgerEntrySourceIdentifier}.
   * @param dataConnectorCostObjectDimensionName Key property. See {@link CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers.dataConnectorCostObjectDimensionName}.
   * @param costObjectDimensionMemberName Key property. See {@link CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers.costObjectDimensionMemberName}.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers`.
   */
  delete(
    dataConnectorSystemInstanceSurrogateKey: string,
    generalLedgerEntrySourceIdentifier: string,
    dataConnectorCostObjectDimensionName: string,
    costObjectDimensionMemberName: string
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers` by taking the entity as a parameter.
   */
  delete(
    entity: CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<T>
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<T>,
    T
  >;
  delete(
    dataConnectorSystemInstanceSurrogateKeyOrEntity: any,
    generalLedgerEntrySourceIdentifier?: string,
    dataConnectorCostObjectDimensionName?: string,
    costObjectDimensionMemberName?: string
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<T>,
    T
  > {
    return new DeleteRequestBuilder<
      CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<T>,
      T
    >(
      this.entityApi,
      dataConnectorSystemInstanceSurrogateKeyOrEntity instanceof
      CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers
        ? dataConnectorSystemInstanceSurrogateKeyOrEntity
        : {
            DataConnectorSystemInstanceSurrogateKey:
              dataConnectorSystemInstanceSurrogateKeyOrEntity!,
            GeneralLedgerEntrySourceIdentifier:
              generalLedgerEntrySourceIdentifier!,
            DataConnectorCostObjectDimensionName:
              dataConnectorCostObjectDimensionName!,
            CostObjectDimensionMemberName: costObjectDimensionMemberName!
          }
    );
  }
}
