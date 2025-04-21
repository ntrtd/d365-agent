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
import { TaxAllowedExemptCodesForIpiEntities } from './TaxAllowedExemptCodesForIpiEntities';

/**
 * Request builder class for operations supported on the {@link TaxAllowedExemptCodesForIpiEntities} entity.
 */
export class TaxAllowedExemptCodesForIpiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxAllowedExemptCodesForIpiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `TaxAllowedExemptCodesForIpiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `TaxAllowedExemptCodesForIpiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<TaxAllowedExemptCodesForIpiEntities<T>, T> {
    return new GetAllRequestBuilder<TaxAllowedExemptCodesForIpiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TaxAllowedExemptCodesForIpiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxAllowedExemptCodesForIpiEntities`.
   */
  create(
    entity: TaxAllowedExemptCodesForIpiEntities<T>
  ): CreateRequestBuilder<TaxAllowedExemptCodesForIpiEntities<T>, T> {
    return new CreateRequestBuilder<TaxAllowedExemptCodesForIpiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxAllowedExemptCodesForIpiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxAllowedExemptCodesForIpiEntities.dataAreaId}.
   * @param exemptCode Key property. See {@link TaxAllowedExemptCodesForIpiEntities.exemptCode}.
   * @param taxationCode Key property. See {@link TaxAllowedExemptCodesForIpiEntities.taxationCode}.
   * @returns A request builder for creating requests to retrieve one `TaxAllowedExemptCodesForIpiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    exemptCode: DeserializedType<T, 'Edm.String'>,
    taxationCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxAllowedExemptCodesForIpiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      TaxAllowedExemptCodesForIpiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ExemptCode: exemptCode,
      TaxationCode: taxationCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxAllowedExemptCodesForIpiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxAllowedExemptCodesForIpiEntities`.
   */
  update(
    entity: TaxAllowedExemptCodesForIpiEntities<T>
  ): UpdateRequestBuilder<TaxAllowedExemptCodesForIpiEntities<T>, T> {
    return new UpdateRequestBuilder<TaxAllowedExemptCodesForIpiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxAllowedExemptCodesForIpiEntities`.
   * @param dataAreaId Key property. See {@link TaxAllowedExemptCodesForIpiEntities.dataAreaId}.
   * @param exemptCode Key property. See {@link TaxAllowedExemptCodesForIpiEntities.exemptCode}.
   * @param taxationCode Key property. See {@link TaxAllowedExemptCodesForIpiEntities.taxationCode}.
   * @returns A request builder for creating requests that delete an entity of type `TaxAllowedExemptCodesForIpiEntities`.
   */
  delete(
    dataAreaId: string,
    exemptCode: string,
    taxationCode: string
  ): DeleteRequestBuilder<TaxAllowedExemptCodesForIpiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxAllowedExemptCodesForIpiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxAllowedExemptCodesForIpiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: TaxAllowedExemptCodesForIpiEntities<T>
  ): DeleteRequestBuilder<TaxAllowedExemptCodesForIpiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    exemptCode?: string,
    taxationCode?: string
  ): DeleteRequestBuilder<TaxAllowedExemptCodesForIpiEntities<T>, T> {
    return new DeleteRequestBuilder<TaxAllowedExemptCodesForIpiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxAllowedExemptCodesForIpiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ExemptCode: exemptCode!,
            TaxationCode: taxationCode!
          }
    );
  }
}
