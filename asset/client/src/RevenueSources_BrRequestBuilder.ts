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
import { RevenueSources_Br } from './RevenueSources_Br';
import { FbRevenueSourceTableTypeBr } from './FbRevenueSourceTableTypeBr';

/**
 * Request builder class for operations supported on the {@link RevenueSources_Br} entity.
 */
export class RevenueSources_BrRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RevenueSources_Br<T>, T> {
  /**
   * Returns a request builder for querying all `RevenueSources_Br` entities.
   * @returns A request builder for creating requests to retrieve all `RevenueSources_Br` entities.
   */
  getAll(): GetAllRequestBuilder<RevenueSources_Br<T>, T> {
    return new GetAllRequestBuilder<RevenueSources_Br<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RevenueSources_Br` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RevenueSources_Br`.
   */
  create(
    entity: RevenueSources_Br<T>
  ): CreateRequestBuilder<RevenueSources_Br<T>, T> {
    return new CreateRequestBuilder<RevenueSources_Br<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RevenueSources_Br` entity based on its keys.
   * @param dataAreaId Key property. See {@link RevenueSources_Br.dataAreaId}.
   * @param code Key property. See {@link RevenueSources_Br.code}.
   * @param tableType Key property. See {@link RevenueSources_Br.tableType}.
   * @returns A request builder for creating requests to retrieve one `RevenueSources_Br` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>,
    tableType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.FBRevenueSourceTableType_BR'
    >
  ): GetByKeyRequestBuilder<RevenueSources_Br<T>, T> {
    return new GetByKeyRequestBuilder<RevenueSources_Br<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Code: code,
      TableType: tableType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RevenueSources_Br`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RevenueSources_Br`.
   */
  update(
    entity: RevenueSources_Br<T>
  ): UpdateRequestBuilder<RevenueSources_Br<T>, T> {
    return new UpdateRequestBuilder<RevenueSources_Br<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RevenueSources_Br`.
   * @param dataAreaId Key property. See {@link RevenueSources_Br.dataAreaId}.
   * @param code Key property. See {@link RevenueSources_Br.code}.
   * @param tableType Key property. See {@link RevenueSources_Br.tableType}.
   * @returns A request builder for creating requests that delete an entity of type `RevenueSources_Br`.
   */
  delete(
    dataAreaId: string,
    code: string,
    tableType: FbRevenueSourceTableTypeBr
  ): DeleteRequestBuilder<RevenueSources_Br<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RevenueSources_Br`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RevenueSources_Br` by taking the entity as a parameter.
   */
  delete(
    entity: RevenueSources_Br<T>
  ): DeleteRequestBuilder<RevenueSources_Br<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    code?: string,
    tableType?: FbRevenueSourceTableTypeBr
  ): DeleteRequestBuilder<RevenueSources_Br<T>, T> {
    return new DeleteRequestBuilder<RevenueSources_Br<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RevenueSources_Br
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Code: code!,
            TableType: tableType!
          }
    );
  }
}
