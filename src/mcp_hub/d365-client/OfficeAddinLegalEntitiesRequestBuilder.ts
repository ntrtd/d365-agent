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
import { OfficeAddinLegalEntities } from './OfficeAddinLegalEntities';

/**
 * Request builder class for operations supported on the {@link OfficeAddinLegalEntities} entity.
 */
export class OfficeAddinLegalEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OfficeAddinLegalEntities<T>, T> {
  /**
   * Returns a request builder for querying all `OfficeAddinLegalEntities` entities.
   * @returns A request builder for creating requests to retrieve all `OfficeAddinLegalEntities` entities.
   */
  getAll(): GetAllRequestBuilder<OfficeAddinLegalEntities<T>, T> {
    return new GetAllRequestBuilder<OfficeAddinLegalEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OfficeAddinLegalEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OfficeAddinLegalEntities`.
   */
  create(
    entity: OfficeAddinLegalEntities<T>
  ): CreateRequestBuilder<OfficeAddinLegalEntities<T>, T> {
    return new CreateRequestBuilder<OfficeAddinLegalEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OfficeAddinLegalEntities` entity based on its keys.
   * @param companyId Key property. See {@link OfficeAddinLegalEntities.companyId}.
   * @returns A request builder for creating requests to retrieve one `OfficeAddinLegalEntities` entity based on its keys.
   */
  getByKey(
    companyId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OfficeAddinLegalEntities<T>, T> {
    return new GetByKeyRequestBuilder<OfficeAddinLegalEntities<T>, T>(
      this.entityApi,
      { CompanyId: companyId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OfficeAddinLegalEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OfficeAddinLegalEntities`.
   */
  update(
    entity: OfficeAddinLegalEntities<T>
  ): UpdateRequestBuilder<OfficeAddinLegalEntities<T>, T> {
    return new UpdateRequestBuilder<OfficeAddinLegalEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OfficeAddinLegalEntities`.
   * @param companyId Key property. See {@link OfficeAddinLegalEntities.companyId}.
   * @returns A request builder for creating requests that delete an entity of type `OfficeAddinLegalEntities`.
   */
  delete(
    companyId: string
  ): DeleteRequestBuilder<OfficeAddinLegalEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OfficeAddinLegalEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OfficeAddinLegalEntities` by taking the entity as a parameter.
   */
  delete(
    entity: OfficeAddinLegalEntities<T>
  ): DeleteRequestBuilder<OfficeAddinLegalEntities<T>, T>;
  delete(
    companyIdOrEntity: any
  ): DeleteRequestBuilder<OfficeAddinLegalEntities<T>, T> {
    return new DeleteRequestBuilder<OfficeAddinLegalEntities<T>, T>(
      this.entityApi,
      companyIdOrEntity instanceof OfficeAddinLegalEntities
        ? companyIdOrEntity
        : { CompanyId: companyIdOrEntity! }
    );
  }
}
