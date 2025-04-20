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
import { CostAccountingDataConnectorFiscalPeriodTypes } from './CostAccountingDataConnectorFiscalPeriodTypes';

/**
 * Request builder class for operations supported on the {@link CostAccountingDataConnectorFiscalPeriodTypes} entity.
 */
export class CostAccountingDataConnectorFiscalPeriodTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostAccountingDataConnectorFiscalPeriodTypes<T>, T> {
  /**
   * Returns a request builder for querying all `CostAccountingDataConnectorFiscalPeriodTypes` entities.
   * @returns A request builder for creating requests to retrieve all `CostAccountingDataConnectorFiscalPeriodTypes` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostAccountingDataConnectorFiscalPeriodTypes<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostAccountingDataConnectorFiscalPeriodTypes<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostAccountingDataConnectorFiscalPeriodTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostAccountingDataConnectorFiscalPeriodTypes`.
   */
  create(
    entity: CostAccountingDataConnectorFiscalPeriodTypes<T>
  ): CreateRequestBuilder<CostAccountingDataConnectorFiscalPeriodTypes<T>, T> {
    return new CreateRequestBuilder<
      CostAccountingDataConnectorFiscalPeriodTypes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostAccountingDataConnectorFiscalPeriodTypes` entity based on its keys.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorFiscalPeriodTypes.dataConnectorSystemInstanceSurrogateKey}.
   * @param surrogateKey Key property. See {@link CostAccountingDataConnectorFiscalPeriodTypes.surrogateKey}.
   * @returns A request builder for creating requests to retrieve one `CostAccountingDataConnectorFiscalPeriodTypes` entity based on its keys.
   */
  getByKey(
    dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>,
    surrogateKey: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    CostAccountingDataConnectorFiscalPeriodTypes<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      CostAccountingDataConnectorFiscalPeriodTypes<T>,
      T
    >(this.entityApi, {
      DataConnectorSystemInstanceSurrogateKey:
        dataConnectorSystemInstanceSurrogateKey,
      SurrogateKey: surrogateKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostAccountingDataConnectorFiscalPeriodTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostAccountingDataConnectorFiscalPeriodTypes`.
   */
  update(
    entity: CostAccountingDataConnectorFiscalPeriodTypes<T>
  ): UpdateRequestBuilder<CostAccountingDataConnectorFiscalPeriodTypes<T>, T> {
    return new UpdateRequestBuilder<
      CostAccountingDataConnectorFiscalPeriodTypes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorFiscalPeriodTypes`.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorFiscalPeriodTypes.dataConnectorSystemInstanceSurrogateKey}.
   * @param surrogateKey Key property. See {@link CostAccountingDataConnectorFiscalPeriodTypes.surrogateKey}.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorFiscalPeriodTypes`.
   */
  delete(
    dataConnectorSystemInstanceSurrogateKey: string,
    surrogateKey: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorFiscalPeriodTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorFiscalPeriodTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorFiscalPeriodTypes` by taking the entity as a parameter.
   */
  delete(
    entity: CostAccountingDataConnectorFiscalPeriodTypes<T>
  ): DeleteRequestBuilder<CostAccountingDataConnectorFiscalPeriodTypes<T>, T>;
  delete(
    dataConnectorSystemInstanceSurrogateKeyOrEntity: any,
    surrogateKey?: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorFiscalPeriodTypes<T>, T> {
    return new DeleteRequestBuilder<
      CostAccountingDataConnectorFiscalPeriodTypes<T>,
      T
    >(
      this.entityApi,
      dataConnectorSystemInstanceSurrogateKeyOrEntity instanceof
      CostAccountingDataConnectorFiscalPeriodTypes
        ? dataConnectorSystemInstanceSurrogateKeyOrEntity
        : {
            DataConnectorSystemInstanceSurrogateKey:
              dataConnectorSystemInstanceSurrogateKeyOrEntity!,
            SurrogateKey: surrogateKey!
          }
    );
  }
}
