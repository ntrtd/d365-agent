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
import { LtmInvSalesPointIdRelations } from './LtmInvSalesPointIdRelations';

/**
 * Request builder class for operations supported on the {@link LtmInvSalesPointIdRelations} entity.
 */
export class LtmInvSalesPointIdRelationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmInvSalesPointIdRelations<T>, T> {
  /**
   * Returns a request builder for querying all `LtmInvSalesPointIdRelations` entities.
   * @returns A request builder for creating requests to retrieve all `LtmInvSalesPointIdRelations` entities.
   */
  getAll(): GetAllRequestBuilder<LtmInvSalesPointIdRelations<T>, T> {
    return new GetAllRequestBuilder<LtmInvSalesPointIdRelations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LtmInvSalesPointIdRelations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmInvSalesPointIdRelations`.
   */
  create(
    entity: LtmInvSalesPointIdRelations<T>
  ): CreateRequestBuilder<LtmInvSalesPointIdRelations<T>, T> {
    return new CreateRequestBuilder<LtmInvSalesPointIdRelations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmInvSalesPointIdRelations` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmInvSalesPointIdRelations.dataAreaId}.
   * @param psSalesPointId Key property. See {@link LtmInvSalesPointIdRelations.psSalesPointId}.
   * @param invSalesPointId Key property. See {@link LtmInvSalesPointIdRelations.invSalesPointId}.
   * @returns A request builder for creating requests to retrieve one `LtmInvSalesPointIdRelations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    psSalesPointId: DeserializedType<T, 'Edm.String'>,
    invSalesPointId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmInvSalesPointIdRelations<T>, T> {
    return new GetByKeyRequestBuilder<LtmInvSalesPointIdRelations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PSSalesPointId: psSalesPointId,
        InvSalesPointId: invSalesPointId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmInvSalesPointIdRelations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmInvSalesPointIdRelations`.
   */
  update(
    entity: LtmInvSalesPointIdRelations<T>
  ): UpdateRequestBuilder<LtmInvSalesPointIdRelations<T>, T> {
    return new UpdateRequestBuilder<LtmInvSalesPointIdRelations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmInvSalesPointIdRelations`.
   * @param dataAreaId Key property. See {@link LtmInvSalesPointIdRelations.dataAreaId}.
   * @param psSalesPointId Key property. See {@link LtmInvSalesPointIdRelations.psSalesPointId}.
   * @param invSalesPointId Key property. See {@link LtmInvSalesPointIdRelations.invSalesPointId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmInvSalesPointIdRelations`.
   */
  delete(
    dataAreaId: string,
    psSalesPointId: string,
    invSalesPointId: string
  ): DeleteRequestBuilder<LtmInvSalesPointIdRelations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmInvSalesPointIdRelations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmInvSalesPointIdRelations` by taking the entity as a parameter.
   */
  delete(
    entity: LtmInvSalesPointIdRelations<T>
  ): DeleteRequestBuilder<LtmInvSalesPointIdRelations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    psSalesPointId?: string,
    invSalesPointId?: string
  ): DeleteRequestBuilder<LtmInvSalesPointIdRelations<T>, T> {
    return new DeleteRequestBuilder<LtmInvSalesPointIdRelations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmInvSalesPointIdRelations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PSSalesPointId: psSalesPointId!,
            InvSalesPointId: invSalesPointId!
          }
    );
  }
}
