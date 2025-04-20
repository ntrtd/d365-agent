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
import { AgingPeriodDefinitions } from './AgingPeriodDefinitions';

/**
 * Request builder class for operations supported on the {@link AgingPeriodDefinitions} entity.
 */
export class AgingPeriodDefinitionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AgingPeriodDefinitions<T>, T> {
  /**
   * Returns a request builder for querying all `AgingPeriodDefinitions` entities.
   * @returns A request builder for creating requests to retrieve all `AgingPeriodDefinitions` entities.
   */
  getAll(): GetAllRequestBuilder<AgingPeriodDefinitions<T>, T> {
    return new GetAllRequestBuilder<AgingPeriodDefinitions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AgingPeriodDefinitions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AgingPeriodDefinitions`.
   */
  create(
    entity: AgingPeriodDefinitions<T>
  ): CreateRequestBuilder<AgingPeriodDefinitions<T>, T> {
    return new CreateRequestBuilder<AgingPeriodDefinitions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AgingPeriodDefinitions` entity based on its keys.
   * @param dataAreaId Key property. See {@link AgingPeriodDefinitions.dataAreaId}.
   * @param agingPeriodDefinition Key property. See {@link AgingPeriodDefinitions.agingPeriodDefinition}.
   * @param lineNum Key property. See {@link AgingPeriodDefinitions.lineNum}.
   * @returns A request builder for creating requests to retrieve one `AgingPeriodDefinitions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    agingPeriodDefinition: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<AgingPeriodDefinitions<T>, T> {
    return new GetByKeyRequestBuilder<AgingPeriodDefinitions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AgingPeriodDefinition: agingPeriodDefinition,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AgingPeriodDefinitions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AgingPeriodDefinitions`.
   */
  update(
    entity: AgingPeriodDefinitions<T>
  ): UpdateRequestBuilder<AgingPeriodDefinitions<T>, T> {
    return new UpdateRequestBuilder<AgingPeriodDefinitions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AgingPeriodDefinitions`.
   * @param dataAreaId Key property. See {@link AgingPeriodDefinitions.dataAreaId}.
   * @param agingPeriodDefinition Key property. See {@link AgingPeriodDefinitions.agingPeriodDefinition}.
   * @param lineNum Key property. See {@link AgingPeriodDefinitions.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `AgingPeriodDefinitions`.
   */
  delete(
    dataAreaId: string,
    agingPeriodDefinition: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<AgingPeriodDefinitions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AgingPeriodDefinitions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AgingPeriodDefinitions` by taking the entity as a parameter.
   */
  delete(
    entity: AgingPeriodDefinitions<T>
  ): DeleteRequestBuilder<AgingPeriodDefinitions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    agingPeriodDefinition?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<AgingPeriodDefinitions<T>, T> {
    return new DeleteRequestBuilder<AgingPeriodDefinitions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AgingPeriodDefinitions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AgingPeriodDefinition: agingPeriodDefinition!,
            LineNum: lineNum!
          }
    );
  }
}
