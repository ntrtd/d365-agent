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
import { CostAccountingDataConnectorGeneralLedgers } from './CostAccountingDataConnectorGeneralLedgers';

/**
 * Request builder class for operations supported on the {@link CostAccountingDataConnectorGeneralLedgers} entity.
 */
export class CostAccountingDataConnectorGeneralLedgersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostAccountingDataConnectorGeneralLedgers<T>, T> {
  /**
   * Returns a request builder for querying all `CostAccountingDataConnectorGeneralLedgers` entities.
   * @returns A request builder for creating requests to retrieve all `CostAccountingDataConnectorGeneralLedgers` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostAccountingDataConnectorGeneralLedgers<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostAccountingDataConnectorGeneralLedgers<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostAccountingDataConnectorGeneralLedgers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostAccountingDataConnectorGeneralLedgers`.
   */
  create(
    entity: CostAccountingDataConnectorGeneralLedgers<T>
  ): CreateRequestBuilder<CostAccountingDataConnectorGeneralLedgers<T>, T> {
    return new CreateRequestBuilder<
      CostAccountingDataConnectorGeneralLedgers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostAccountingDataConnectorGeneralLedgers` entity based on its keys.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorGeneralLedgers.dataConnectorSystemInstanceSurrogateKey}.
   * @param surrogateKey Key property. See {@link CostAccountingDataConnectorGeneralLedgers.surrogateKey}.
   * @returns A request builder for creating requests to retrieve one `CostAccountingDataConnectorGeneralLedgers` entity based on its keys.
   */
  getByKey(
    dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>,
    surrogateKey: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostAccountingDataConnectorGeneralLedgers<T>, T> {
    return new GetByKeyRequestBuilder<
      CostAccountingDataConnectorGeneralLedgers<T>,
      T
    >(this.entityApi, {
      DataConnectorSystemInstanceSurrogateKey:
        dataConnectorSystemInstanceSurrogateKey,
      SurrogateKey: surrogateKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostAccountingDataConnectorGeneralLedgers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostAccountingDataConnectorGeneralLedgers`.
   */
  update(
    entity: CostAccountingDataConnectorGeneralLedgers<T>
  ): UpdateRequestBuilder<CostAccountingDataConnectorGeneralLedgers<T>, T> {
    return new UpdateRequestBuilder<
      CostAccountingDataConnectorGeneralLedgers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorGeneralLedgers`.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorGeneralLedgers.dataConnectorSystemInstanceSurrogateKey}.
   * @param surrogateKey Key property. See {@link CostAccountingDataConnectorGeneralLedgers.surrogateKey}.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorGeneralLedgers`.
   */
  delete(
    dataConnectorSystemInstanceSurrogateKey: string,
    surrogateKey: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorGeneralLedgers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorGeneralLedgers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorGeneralLedgers` by taking the entity as a parameter.
   */
  delete(
    entity: CostAccountingDataConnectorGeneralLedgers<T>
  ): DeleteRequestBuilder<CostAccountingDataConnectorGeneralLedgers<T>, T>;
  delete(
    dataConnectorSystemInstanceSurrogateKeyOrEntity: any,
    surrogateKey?: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorGeneralLedgers<T>, T> {
    return new DeleteRequestBuilder<
      CostAccountingDataConnectorGeneralLedgers<T>,
      T
    >(
      this.entityApi,
      dataConnectorSystemInstanceSurrogateKeyOrEntity instanceof
      CostAccountingDataConnectorGeneralLedgers
        ? dataConnectorSystemInstanceSurrogateKeyOrEntity
        : {
            DataConnectorSystemInstanceSurrogateKey:
              dataConnectorSystemInstanceSurrogateKeyOrEntity!,
            SurrogateKey: surrogateKey!
          }
    );
  }
}
