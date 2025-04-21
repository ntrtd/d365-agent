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
import { CurrencyIndexes } from './CurrencyIndexes';

/**
 * Request builder class for operations supported on the {@link CurrencyIndexes} entity.
 */
export class CurrencyIndexesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CurrencyIndexes<T>, T> {
  /**
   * Returns a request builder for querying all `CurrencyIndexes` entities.
   * @returns A request builder for creating requests to retrieve all `CurrencyIndexes` entities.
   */
  getAll(): GetAllRequestBuilder<CurrencyIndexes<T>, T> {
    return new GetAllRequestBuilder<CurrencyIndexes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CurrencyIndexes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CurrencyIndexes`.
   */
  create(
    entity: CurrencyIndexes<T>
  ): CreateRequestBuilder<CurrencyIndexes<T>, T> {
    return new CreateRequestBuilder<CurrencyIndexes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CurrencyIndexes` entity based on its keys.
   * @param dataAreaId Key property. See {@link CurrencyIndexes.dataAreaId}.
   * @param ruleGroup Key property. See {@link CurrencyIndexes.ruleGroup}.
   * @param inflationIndex Key property. See {@link CurrencyIndexes.inflationIndex}.
   * @returns A request builder for creating requests to retrieve one `CurrencyIndexes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    ruleGroup: DeserializedType<T, 'Edm.String'>,
    inflationIndex: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CurrencyIndexes<T>, T> {
    return new GetByKeyRequestBuilder<CurrencyIndexes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      RuleGroup: ruleGroup,
      InflationIndex: inflationIndex
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CurrencyIndexes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CurrencyIndexes`.
   */
  update(
    entity: CurrencyIndexes<T>
  ): UpdateRequestBuilder<CurrencyIndexes<T>, T> {
    return new UpdateRequestBuilder<CurrencyIndexes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CurrencyIndexes`.
   * @param dataAreaId Key property. See {@link CurrencyIndexes.dataAreaId}.
   * @param ruleGroup Key property. See {@link CurrencyIndexes.ruleGroup}.
   * @param inflationIndex Key property. See {@link CurrencyIndexes.inflationIndex}.
   * @returns A request builder for creating requests that delete an entity of type `CurrencyIndexes`.
   */
  delete(
    dataAreaId: string,
    ruleGroup: string,
    inflationIndex: string
  ): DeleteRequestBuilder<CurrencyIndexes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CurrencyIndexes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CurrencyIndexes` by taking the entity as a parameter.
   */
  delete(
    entity: CurrencyIndexes<T>
  ): DeleteRequestBuilder<CurrencyIndexes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    ruleGroup?: string,
    inflationIndex?: string
  ): DeleteRequestBuilder<CurrencyIndexes<T>, T> {
    return new DeleteRequestBuilder<CurrencyIndexes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CurrencyIndexes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RuleGroup: ruleGroup!,
            InflationIndex: inflationIndex!
          }
    );
  }
}
