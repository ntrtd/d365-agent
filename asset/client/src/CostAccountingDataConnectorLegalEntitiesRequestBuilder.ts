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
import { CostAccountingDataConnectorLegalEntities } from './CostAccountingDataConnectorLegalEntities';

/**
 * Request builder class for operations supported on the {@link CostAccountingDataConnectorLegalEntities} entity.
 */
export class CostAccountingDataConnectorLegalEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostAccountingDataConnectorLegalEntities<T>, T> {
  /**
   * Returns a request builder for querying all `CostAccountingDataConnectorLegalEntities` entities.
   * @returns A request builder for creating requests to retrieve all `CostAccountingDataConnectorLegalEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostAccountingDataConnectorLegalEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostAccountingDataConnectorLegalEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostAccountingDataConnectorLegalEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostAccountingDataConnectorLegalEntities`.
   */
  create(
    entity: CostAccountingDataConnectorLegalEntities<T>
  ): CreateRequestBuilder<CostAccountingDataConnectorLegalEntities<T>, T> {
    return new CreateRequestBuilder<
      CostAccountingDataConnectorLegalEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostAccountingDataConnectorLegalEntities` entity based on its keys.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorLegalEntities.dataConnectorSystemInstanceSurrogateKey}.
   * @param surrogateKey Key property. See {@link CostAccountingDataConnectorLegalEntities.surrogateKey}.
   * @returns A request builder for creating requests to retrieve one `CostAccountingDataConnectorLegalEntities` entity based on its keys.
   */
  getByKey(
    dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>,
    surrogateKey: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostAccountingDataConnectorLegalEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      CostAccountingDataConnectorLegalEntities<T>,
      T
    >(this.entityApi, {
      DataConnectorSystemInstanceSurrogateKey:
        dataConnectorSystemInstanceSurrogateKey,
      SurrogateKey: surrogateKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostAccountingDataConnectorLegalEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostAccountingDataConnectorLegalEntities`.
   */
  update(
    entity: CostAccountingDataConnectorLegalEntities<T>
  ): UpdateRequestBuilder<CostAccountingDataConnectorLegalEntities<T>, T> {
    return new UpdateRequestBuilder<
      CostAccountingDataConnectorLegalEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorLegalEntities`.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorLegalEntities.dataConnectorSystemInstanceSurrogateKey}.
   * @param surrogateKey Key property. See {@link CostAccountingDataConnectorLegalEntities.surrogateKey}.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorLegalEntities`.
   */
  delete(
    dataConnectorSystemInstanceSurrogateKey: string,
    surrogateKey: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorLegalEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorLegalEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorLegalEntities` by taking the entity as a parameter.
   */
  delete(
    entity: CostAccountingDataConnectorLegalEntities<T>
  ): DeleteRequestBuilder<CostAccountingDataConnectorLegalEntities<T>, T>;
  delete(
    dataConnectorSystemInstanceSurrogateKeyOrEntity: any,
    surrogateKey?: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorLegalEntities<T>, T> {
    return new DeleteRequestBuilder<
      CostAccountingDataConnectorLegalEntities<T>,
      T
    >(
      this.entityApi,
      dataConnectorSystemInstanceSurrogateKeyOrEntity instanceof
      CostAccountingDataConnectorLegalEntities
        ? dataConnectorSystemInstanceSurrogateKeyOrEntity
        : {
            DataConnectorSystemInstanceSurrogateKey:
              dataConnectorSystemInstanceSurrogateKeyOrEntity!,
            SurrogateKey: surrogateKey!
          }
    );
  }
}
