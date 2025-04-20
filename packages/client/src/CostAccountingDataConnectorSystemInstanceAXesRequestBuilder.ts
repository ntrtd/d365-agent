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
import { CostAccountingDataConnectorSystemInstanceAXes } from './CostAccountingDataConnectorSystemInstanceAXes';

/**
 * Request builder class for operations supported on the {@link CostAccountingDataConnectorSystemInstanceAXes} entity.
 */
export class CostAccountingDataConnectorSystemInstanceAXesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostAccountingDataConnectorSystemInstanceAXes<T>, T> {
  /**
   * Returns a request builder for querying all `CostAccountingDataConnectorSystemInstanceAXes` entities.
   * @returns A request builder for creating requests to retrieve all `CostAccountingDataConnectorSystemInstanceAXes` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostAccountingDataConnectorSystemInstanceAXes<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostAccountingDataConnectorSystemInstanceAXes<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostAccountingDataConnectorSystemInstanceAXes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostAccountingDataConnectorSystemInstanceAXes`.
   */
  create(
    entity: CostAccountingDataConnectorSystemInstanceAXes<T>
  ): CreateRequestBuilder<CostAccountingDataConnectorSystemInstanceAXes<T>, T> {
    return new CreateRequestBuilder<
      CostAccountingDataConnectorSystemInstanceAXes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostAccountingDataConnectorSystemInstanceAXes` entity based on its keys.
   * @param surrogateKey Key property. See {@link CostAccountingDataConnectorSystemInstanceAXes.surrogateKey}.
   * @returns A request builder for creating requests to retrieve one `CostAccountingDataConnectorSystemInstanceAXes` entity based on its keys.
   */
  getByKey(
    surrogateKey: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    CostAccountingDataConnectorSystemInstanceAXes<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      CostAccountingDataConnectorSystemInstanceAXes<T>,
      T
    >(this.entityApi, { SurrogateKey: surrogateKey });
  }

  /**
   * Returns a request builder for updating an entity of type `CostAccountingDataConnectorSystemInstanceAXes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostAccountingDataConnectorSystemInstanceAXes`.
   */
  update(
    entity: CostAccountingDataConnectorSystemInstanceAXes<T>
  ): UpdateRequestBuilder<CostAccountingDataConnectorSystemInstanceAXes<T>, T> {
    return new UpdateRequestBuilder<
      CostAccountingDataConnectorSystemInstanceAXes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorSystemInstanceAXes`.
   * @param surrogateKey Key property. See {@link CostAccountingDataConnectorSystemInstanceAXes.surrogateKey}.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorSystemInstanceAXes`.
   */
  delete(
    surrogateKey: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorSystemInstanceAXes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorSystemInstanceAXes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorSystemInstanceAXes` by taking the entity as a parameter.
   */
  delete(
    entity: CostAccountingDataConnectorSystemInstanceAXes<T>
  ): DeleteRequestBuilder<CostAccountingDataConnectorSystemInstanceAXes<T>, T>;
  delete(
    surrogateKeyOrEntity: any
  ): DeleteRequestBuilder<CostAccountingDataConnectorSystemInstanceAXes<T>, T> {
    return new DeleteRequestBuilder<
      CostAccountingDataConnectorSystemInstanceAXes<T>,
      T
    >(
      this.entityApi,
      surrogateKeyOrEntity instanceof
      CostAccountingDataConnectorSystemInstanceAXes
        ? surrogateKeyOrEntity
        : { SurrogateKey: surrogateKeyOrEntity! }
    );
  }
}
