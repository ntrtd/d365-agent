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
import { SmaServiceOrderLineBiEntities } from './SmaServiceOrderLineBiEntities';

/**
 * Request builder class for operations supported on the {@link SmaServiceOrderLineBiEntities} entity.
 */
export class SmaServiceOrderLineBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SmaServiceOrderLineBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SmaServiceOrderLineBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SmaServiceOrderLineBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SmaServiceOrderLineBiEntities<T>, T> {
    return new GetAllRequestBuilder<SmaServiceOrderLineBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SmaServiceOrderLineBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SmaServiceOrderLineBiEntities`.
   */
  create(
    entity: SmaServiceOrderLineBiEntities<T>
  ): CreateRequestBuilder<SmaServiceOrderLineBiEntities<T>, T> {
    return new CreateRequestBuilder<SmaServiceOrderLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SmaServiceOrderLineBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link SmaServiceOrderLineBiEntities.dataAreaId}.
   * @param serviceOrderId Key property. See {@link SmaServiceOrderLineBiEntities.serviceOrderId}.
   * @param serviceOrderLineNum Key property. See {@link SmaServiceOrderLineBiEntities.serviceOrderLineNum}.
   * @returns A request builder for creating requests to retrieve one `SmaServiceOrderLineBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    serviceOrderId: DeserializedType<T, 'Edm.String'>,
    serviceOrderLineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SmaServiceOrderLineBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<SmaServiceOrderLineBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ServiceOrderId: serviceOrderId,
        ServiceOrderLineNum: serviceOrderLineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SmaServiceOrderLineBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SmaServiceOrderLineBiEntities`.
   */
  update(
    entity: SmaServiceOrderLineBiEntities<T>
  ): UpdateRequestBuilder<SmaServiceOrderLineBiEntities<T>, T> {
    return new UpdateRequestBuilder<SmaServiceOrderLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SmaServiceOrderLineBiEntities`.
   * @param dataAreaId Key property. See {@link SmaServiceOrderLineBiEntities.dataAreaId}.
   * @param serviceOrderId Key property. See {@link SmaServiceOrderLineBiEntities.serviceOrderId}.
   * @param serviceOrderLineNum Key property. See {@link SmaServiceOrderLineBiEntities.serviceOrderLineNum}.
   * @returns A request builder for creating requests that delete an entity of type `SmaServiceOrderLineBiEntities`.
   */
  delete(
    dataAreaId: string,
    serviceOrderId: string,
    serviceOrderLineNum: BigNumber
  ): DeleteRequestBuilder<SmaServiceOrderLineBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SmaServiceOrderLineBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SmaServiceOrderLineBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SmaServiceOrderLineBiEntities<T>
  ): DeleteRequestBuilder<SmaServiceOrderLineBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    serviceOrderId?: string,
    serviceOrderLineNum?: BigNumber
  ): DeleteRequestBuilder<SmaServiceOrderLineBiEntities<T>, T> {
    return new DeleteRequestBuilder<SmaServiceOrderLineBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SmaServiceOrderLineBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ServiceOrderId: serviceOrderId!,
            ServiceOrderLineNum: serviceOrderLineNum!
          }
    );
  }
}
