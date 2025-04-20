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
import { RetailInfocodeAssociations } from './RetailInfocodeAssociations';
import { RetailInfocodeRefTableIdBase } from './RetailInfocodeRefTableIdBase';

/**
 * Request builder class for operations supported on the {@link RetailInfocodeAssociations} entity.
 */
export class RetailInfocodeAssociationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailInfocodeAssociations<T>, T> {
  /**
   * Returns a request builder for querying all `RetailInfocodeAssociations` entities.
   * @returns A request builder for creating requests to retrieve all `RetailInfocodeAssociations` entities.
   */
  getAll(): GetAllRequestBuilder<RetailInfocodeAssociations<T>, T> {
    return new GetAllRequestBuilder<RetailInfocodeAssociations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailInfocodeAssociations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailInfocodeAssociations`.
   */
  create(
    entity: RetailInfocodeAssociations<T>
  ): CreateRequestBuilder<RetailInfocodeAssociations<T>, T> {
    return new CreateRequestBuilder<RetailInfocodeAssociations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailInfocodeAssociations` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailInfocodeAssociations.dataAreaId}.
   * @param refTableId Key property. See {@link RetailInfocodeAssociations.refTableId}.
   * @param refRelation1 Key property. See {@link RetailInfocodeAssociations.refRelation1}.
   * @param refRelation2 Key property. See {@link RetailInfocodeAssociations.refRelation2}.
   * @param refRelation3 Key property. See {@link RetailInfocodeAssociations.refRelation3}.
   * @param infocodeId Key property. See {@link RetailInfocodeAssociations.infocodeId}.
   * @returns A request builder for creating requests to retrieve one `RetailInfocodeAssociations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    refTableId: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailInfocodeRefTableIdBase'
    >,
    refRelation1: DeserializedType<T, 'Edm.String'>,
    refRelation2: DeserializedType<T, 'Edm.String'>,
    refRelation3: DeserializedType<T, 'Edm.String'>,
    infocodeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailInfocodeAssociations<T>, T> {
    return new GetByKeyRequestBuilder<RetailInfocodeAssociations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RefTableId: refTableId,
        RefRelation1: refRelation1,
        RefRelation2: refRelation2,
        RefRelation3: refRelation3,
        InfocodeId: infocodeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailInfocodeAssociations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailInfocodeAssociations`.
   */
  update(
    entity: RetailInfocodeAssociations<T>
  ): UpdateRequestBuilder<RetailInfocodeAssociations<T>, T> {
    return new UpdateRequestBuilder<RetailInfocodeAssociations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailInfocodeAssociations`.
   * @param dataAreaId Key property. See {@link RetailInfocodeAssociations.dataAreaId}.
   * @param refTableId Key property. See {@link RetailInfocodeAssociations.refTableId}.
   * @param refRelation1 Key property. See {@link RetailInfocodeAssociations.refRelation1}.
   * @param refRelation2 Key property. See {@link RetailInfocodeAssociations.refRelation2}.
   * @param refRelation3 Key property. See {@link RetailInfocodeAssociations.refRelation3}.
   * @param infocodeId Key property. See {@link RetailInfocodeAssociations.infocodeId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailInfocodeAssociations`.
   */
  delete(
    dataAreaId: string,
    refTableId: RetailInfocodeRefTableIdBase,
    refRelation1: string,
    refRelation2: string,
    refRelation3: string,
    infocodeId: string
  ): DeleteRequestBuilder<RetailInfocodeAssociations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailInfocodeAssociations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailInfocodeAssociations` by taking the entity as a parameter.
   */
  delete(
    entity: RetailInfocodeAssociations<T>
  ): DeleteRequestBuilder<RetailInfocodeAssociations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    refTableId?: RetailInfocodeRefTableIdBase,
    refRelation1?: string,
    refRelation2?: string,
    refRelation3?: string,
    infocodeId?: string
  ): DeleteRequestBuilder<RetailInfocodeAssociations<T>, T> {
    return new DeleteRequestBuilder<RetailInfocodeAssociations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailInfocodeAssociations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RefTableId: refTableId!,
            RefRelation1: refRelation1!,
            RefRelation2: refRelation2!,
            RefRelation3: refRelation3!,
            InfocodeId: infocodeId!
          }
    );
  }
}
