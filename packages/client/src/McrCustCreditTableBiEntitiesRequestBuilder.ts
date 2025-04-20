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
import { McrCustCreditTableBiEntities } from './McrCustCreditTableBiEntities';

/**
 * Request builder class for operations supported on the {@link McrCustCreditTableBiEntities} entity.
 */
export class McrCustCreditTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<McrCustCreditTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `McrCustCreditTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `McrCustCreditTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<McrCustCreditTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<McrCustCreditTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `McrCustCreditTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `McrCustCreditTableBiEntities`.
   */
  create(
    entity: McrCustCreditTableBiEntities<T>
  ): CreateRequestBuilder<McrCustCreditTableBiEntities<T>, T> {
    return new CreateRequestBuilder<McrCustCreditTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `McrCustCreditTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link McrCustCreditTableBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link McrCustCreditTableBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `McrCustCreditTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<McrCustCreditTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<McrCustCreditTableBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `McrCustCreditTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `McrCustCreditTableBiEntities`.
   */
  update(
    entity: McrCustCreditTableBiEntities<T>
  ): UpdateRequestBuilder<McrCustCreditTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<McrCustCreditTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `McrCustCreditTableBiEntities`.
   * @param dataAreaId Key property. See {@link McrCustCreditTableBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link McrCustCreditTableBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `McrCustCreditTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<McrCustCreditTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `McrCustCreditTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `McrCustCreditTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: McrCustCreditTableBiEntities<T>
  ): DeleteRequestBuilder<McrCustCreditTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<McrCustCreditTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<McrCustCreditTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof McrCustCreditTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
