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
import { EmployerTaxRegions } from './EmployerTaxRegions';

/**
 * Request builder class for operations supported on the {@link EmployerTaxRegions} entity.
 */
export class EmployerTaxRegionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmployerTaxRegions<T>, T> {
  /**
   * Returns a request builder for querying all `EmployerTaxRegions` entities.
   * @returns A request builder for creating requests to retrieve all `EmployerTaxRegions` entities.
   */
  getAll(): GetAllRequestBuilder<EmployerTaxRegions<T>, T> {
    return new GetAllRequestBuilder<EmployerTaxRegions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmployerTaxRegions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployerTaxRegions`.
   */
  create(
    entity: EmployerTaxRegions<T>
  ): CreateRequestBuilder<EmployerTaxRegions<T>, T> {
    return new CreateRequestBuilder<EmployerTaxRegions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EmployerTaxRegions` entity based on its keys.
   * @param countryRegionId Key property. See {@link EmployerTaxRegions.countryRegionId}.
   * @param stateId Key property. See {@link EmployerTaxRegions.stateId}.
   * @param legalEntityId Key property. See {@link EmployerTaxRegions.legalEntityId}.
   * @returns A request builder for creating requests to retrieve one `EmployerTaxRegions` entity based on its keys.
   */
  getByKey(
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    stateId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EmployerTaxRegions<T>, T> {
    return new GetByKeyRequestBuilder<EmployerTaxRegions<T>, T>(
      this.entityApi,
      {
        CountryRegionId: countryRegionId,
        StateId: stateId,
        LegalEntityId: legalEntityId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmployerTaxRegions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployerTaxRegions`.
   */
  update(
    entity: EmployerTaxRegions<T>
  ): UpdateRequestBuilder<EmployerTaxRegions<T>, T> {
    return new UpdateRequestBuilder<EmployerTaxRegions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployerTaxRegions`.
   * @param countryRegionId Key property. See {@link EmployerTaxRegions.countryRegionId}.
   * @param stateId Key property. See {@link EmployerTaxRegions.stateId}.
   * @param legalEntityId Key property. See {@link EmployerTaxRegions.legalEntityId}.
   * @returns A request builder for creating requests that delete an entity of type `EmployerTaxRegions`.
   */
  delete(
    countryRegionId: string,
    stateId: string,
    legalEntityId: string
  ): DeleteRequestBuilder<EmployerTaxRegions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmployerTaxRegions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployerTaxRegions` by taking the entity as a parameter.
   */
  delete(
    entity: EmployerTaxRegions<T>
  ): DeleteRequestBuilder<EmployerTaxRegions<T>, T>;
  delete(
    countryRegionIdOrEntity: any,
    stateId?: string,
    legalEntityId?: string
  ): DeleteRequestBuilder<EmployerTaxRegions<T>, T> {
    return new DeleteRequestBuilder<EmployerTaxRegions<T>, T>(
      this.entityApi,
      countryRegionIdOrEntity instanceof EmployerTaxRegions
        ? countryRegionIdOrEntity
        : {
            CountryRegionId: countryRegionIdOrEntity!,
            StateId: stateId!,
            LegalEntityId: legalEntityId!
          }
    );
  }
}
