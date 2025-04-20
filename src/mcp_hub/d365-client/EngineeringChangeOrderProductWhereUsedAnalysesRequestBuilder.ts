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
import { EngineeringChangeOrderProductWhereUsedAnalyses } from './EngineeringChangeOrderProductWhereUsedAnalyses';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductWhereUsedAnalyses} entity.
 */
export class EngineeringChangeOrderProductWhereUsedAnalysesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeOrderProductWhereUsedAnalyses<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductWhereUsedAnalyses` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductWhereUsedAnalyses` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringChangeOrderProductWhereUsedAnalyses<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderProductWhereUsedAnalyses<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductWhereUsedAnalyses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductWhereUsedAnalyses`.
   */
  create(
    entity: EngineeringChangeOrderProductWhereUsedAnalyses<T>
  ): CreateRequestBuilder<
    EngineeringChangeOrderProductWhereUsedAnalyses<T>,
    T
  > {
    return new CreateRequestBuilder<
      EngineeringChangeOrderProductWhereUsedAnalyses<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductWhereUsedAnalyses` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductWhereUsedAnalyses.dataAreaId}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductWhereUsedAnalyses.engineeringChangeOrderProductLineNumber}.
   * @param usedInProductNumber Key property. See {@link EngineeringChangeOrderProductWhereUsedAnalyses.usedInProductNumber}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductWhereUsedAnalyses.engineeringChangeOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductWhereUsedAnalyses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    usedInProductNumber: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    EngineeringChangeOrderProductWhereUsedAnalyses<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderProductWhereUsedAnalyses<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      EngineeringChangeOrderProductLineNumber:
        engineeringChangeOrderProductLineNumber,
      UsedInProductNumber: usedInProductNumber,
      EngineeringChangeOrderNumber: engineeringChangeOrderNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductWhereUsedAnalyses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductWhereUsedAnalyses`.
   */
  update(
    entity: EngineeringChangeOrderProductWhereUsedAnalyses<T>
  ): UpdateRequestBuilder<
    EngineeringChangeOrderProductWhereUsedAnalyses<T>,
    T
  > {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderProductWhereUsedAnalyses<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductWhereUsedAnalyses`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductWhereUsedAnalyses.dataAreaId}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductWhereUsedAnalyses.engineeringChangeOrderProductLineNumber}.
   * @param usedInProductNumber Key property. See {@link EngineeringChangeOrderProductWhereUsedAnalyses.usedInProductNumber}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductWhereUsedAnalyses.engineeringChangeOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductWhereUsedAnalyses`.
   */
  delete(
    dataAreaId: string,
    engineeringChangeOrderProductLineNumber: BigNumber,
    usedInProductNumber: string,
    engineeringChangeOrderNumber: string
  ): DeleteRequestBuilder<EngineeringChangeOrderProductWhereUsedAnalyses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductWhereUsedAnalyses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductWhereUsedAnalyses` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductWhereUsedAnalyses<T>
  ): DeleteRequestBuilder<EngineeringChangeOrderProductWhereUsedAnalyses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    engineeringChangeOrderProductLineNumber?: BigNumber,
    usedInProductNumber?: string,
    engineeringChangeOrderNumber?: string
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductWhereUsedAnalyses<T>,
    T
  > {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderProductWhereUsedAnalyses<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      EngineeringChangeOrderProductWhereUsedAnalyses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EngineeringChangeOrderProductLineNumber:
              engineeringChangeOrderProductLineNumber!,
            UsedInProductNumber: usedInProductNumber!,
            EngineeringChangeOrderNumber: engineeringChangeOrderNumber!
          }
    );
  }
}
