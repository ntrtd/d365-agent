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
import { CostAccountingDataConnectorGeneralLedgerEntries } from './CostAccountingDataConnectorGeneralLedgerEntries';

/**
 * Request builder class for operations supported on the {@link CostAccountingDataConnectorGeneralLedgerEntries} entity.
 */
export class CostAccountingDataConnectorGeneralLedgerEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  CostAccountingDataConnectorGeneralLedgerEntries<T>,
  T
> {
  /**
   * Returns a request builder for querying all `CostAccountingDataConnectorGeneralLedgerEntries` entities.
   * @returns A request builder for creating requests to retrieve all `CostAccountingDataConnectorGeneralLedgerEntries` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostAccountingDataConnectorGeneralLedgerEntries<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostAccountingDataConnectorGeneralLedgerEntries<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostAccountingDataConnectorGeneralLedgerEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostAccountingDataConnectorGeneralLedgerEntries`.
   */
  create(
    entity: CostAccountingDataConnectorGeneralLedgerEntries<T>
  ): CreateRequestBuilder<
    CostAccountingDataConnectorGeneralLedgerEntries<T>,
    T
  > {
    return new CreateRequestBuilder<
      CostAccountingDataConnectorGeneralLedgerEntries<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostAccountingDataConnectorGeneralLedgerEntries` entity based on its keys.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorGeneralLedgerEntries.dataConnectorSystemInstanceSurrogateKey}.
   * @param sourceIdentifier Key property. See {@link CostAccountingDataConnectorGeneralLedgerEntries.sourceIdentifier}.
   * @returns A request builder for creating requests to retrieve one `CostAccountingDataConnectorGeneralLedgerEntries` entity based on its keys.
   */
  getByKey(
    dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>,
    sourceIdentifier: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    CostAccountingDataConnectorGeneralLedgerEntries<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      CostAccountingDataConnectorGeneralLedgerEntries<T>,
      T
    >(this.entityApi, {
      DataConnectorSystemInstanceSurrogateKey:
        dataConnectorSystemInstanceSurrogateKey,
      SourceIdentifier: sourceIdentifier
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostAccountingDataConnectorGeneralLedgerEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostAccountingDataConnectorGeneralLedgerEntries`.
   */
  update(
    entity: CostAccountingDataConnectorGeneralLedgerEntries<T>
  ): UpdateRequestBuilder<
    CostAccountingDataConnectorGeneralLedgerEntries<T>,
    T
  > {
    return new UpdateRequestBuilder<
      CostAccountingDataConnectorGeneralLedgerEntries<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorGeneralLedgerEntries`.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorGeneralLedgerEntries.dataConnectorSystemInstanceSurrogateKey}.
   * @param sourceIdentifier Key property. See {@link CostAccountingDataConnectorGeneralLedgerEntries.sourceIdentifier}.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorGeneralLedgerEntries`.
   */
  delete(
    dataConnectorSystemInstanceSurrogateKey: string,
    sourceIdentifier: string
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorGeneralLedgerEntries<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorGeneralLedgerEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorGeneralLedgerEntries` by taking the entity as a parameter.
   */
  delete(
    entity: CostAccountingDataConnectorGeneralLedgerEntries<T>
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorGeneralLedgerEntries<T>,
    T
  >;
  delete(
    dataConnectorSystemInstanceSurrogateKeyOrEntity: any,
    sourceIdentifier?: string
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorGeneralLedgerEntries<T>,
    T
  > {
    return new DeleteRequestBuilder<
      CostAccountingDataConnectorGeneralLedgerEntries<T>,
      T
    >(
      this.entityApi,
      dataConnectorSystemInstanceSurrogateKeyOrEntity instanceof
      CostAccountingDataConnectorGeneralLedgerEntries
        ? dataConnectorSystemInstanceSurrogateKeyOrEntity
        : {
            DataConnectorSystemInstanceSurrogateKey:
              dataConnectorSystemInstanceSurrogateKeyOrEntity!,
            SourceIdentifier: sourceIdentifier!
          }
    );
  }
}
