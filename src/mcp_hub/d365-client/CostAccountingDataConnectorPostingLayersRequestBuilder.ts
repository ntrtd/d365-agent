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
import { CostAccountingDataConnectorPostingLayers } from './CostAccountingDataConnectorPostingLayers';

/**
 * Request builder class for operations supported on the {@link CostAccountingDataConnectorPostingLayers} entity.
 */
export class CostAccountingDataConnectorPostingLayersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostAccountingDataConnectorPostingLayers<T>, T> {
  /**
   * Returns a request builder for querying all `CostAccountingDataConnectorPostingLayers` entities.
   * @returns A request builder for creating requests to retrieve all `CostAccountingDataConnectorPostingLayers` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostAccountingDataConnectorPostingLayers<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostAccountingDataConnectorPostingLayers<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostAccountingDataConnectorPostingLayers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostAccountingDataConnectorPostingLayers`.
   */
  create(
    entity: CostAccountingDataConnectorPostingLayers<T>
  ): CreateRequestBuilder<CostAccountingDataConnectorPostingLayers<T>, T> {
    return new CreateRequestBuilder<
      CostAccountingDataConnectorPostingLayers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostAccountingDataConnectorPostingLayers` entity based on its keys.
   * @param dataConnectorSystemInstanceAx Key property. See {@link CostAccountingDataConnectorPostingLayers.dataConnectorSystemInstanceAx}.
   * @param surrogateKey Key property. See {@link CostAccountingDataConnectorPostingLayers.surrogateKey}.
   * @returns A request builder for creating requests to retrieve one `CostAccountingDataConnectorPostingLayers` entity based on its keys.
   */
  getByKey(
    dataConnectorSystemInstanceAx: DeserializedType<T, 'Edm.Int64'>,
    surrogateKey: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostAccountingDataConnectorPostingLayers<T>, T> {
    return new GetByKeyRequestBuilder<
      CostAccountingDataConnectorPostingLayers<T>,
      T
    >(this.entityApi, {
      DataConnectorSystemInstanceAX: dataConnectorSystemInstanceAx,
      SurrogateKey: surrogateKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostAccountingDataConnectorPostingLayers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostAccountingDataConnectorPostingLayers`.
   */
  update(
    entity: CostAccountingDataConnectorPostingLayers<T>
  ): UpdateRequestBuilder<CostAccountingDataConnectorPostingLayers<T>, T> {
    return new UpdateRequestBuilder<
      CostAccountingDataConnectorPostingLayers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorPostingLayers`.
   * @param dataConnectorSystemInstanceAx Key property. See {@link CostAccountingDataConnectorPostingLayers.dataConnectorSystemInstanceAx}.
   * @param surrogateKey Key property. See {@link CostAccountingDataConnectorPostingLayers.surrogateKey}.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorPostingLayers`.
   */
  delete(
    dataConnectorSystemInstanceAx: BigNumber,
    surrogateKey: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorPostingLayers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorPostingLayers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorPostingLayers` by taking the entity as a parameter.
   */
  delete(
    entity: CostAccountingDataConnectorPostingLayers<T>
  ): DeleteRequestBuilder<CostAccountingDataConnectorPostingLayers<T>, T>;
  delete(
    dataConnectorSystemInstanceAxOrEntity: any,
    surrogateKey?: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorPostingLayers<T>, T> {
    return new DeleteRequestBuilder<
      CostAccountingDataConnectorPostingLayers<T>,
      T
    >(
      this.entityApi,
      dataConnectorSystemInstanceAxOrEntity instanceof
      CostAccountingDataConnectorPostingLayers
        ? dataConnectorSystemInstanceAxOrEntity
        : {
            DataConnectorSystemInstanceAX:
              dataConnectorSystemInstanceAxOrEntity!,
            SurrogateKey: surrogateKey!
          }
    );
  }
}
