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
import { FiscalIntegrationTechnicalProfileOverrides } from './FiscalIntegrationTechnicalProfileOverrides';

/**
 * Request builder class for operations supported on the {@link FiscalIntegrationTechnicalProfileOverrides} entity.
 */
export class FiscalIntegrationTechnicalProfileOverridesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalIntegrationTechnicalProfileOverrides<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalIntegrationTechnicalProfileOverrides` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalIntegrationTechnicalProfileOverrides` entities.
   */
  getAll(): GetAllRequestBuilder<
    FiscalIntegrationTechnicalProfileOverrides<T>,
    T
  > {
    return new GetAllRequestBuilder<
      FiscalIntegrationTechnicalProfileOverrides<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalIntegrationTechnicalProfileOverrides` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalIntegrationTechnicalProfileOverrides`.
   */
  create(
    entity: FiscalIntegrationTechnicalProfileOverrides<T>
  ): CreateRequestBuilder<FiscalIntegrationTechnicalProfileOverrides<T>, T> {
    return new CreateRequestBuilder<
      FiscalIntegrationTechnicalProfileOverrides<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FiscalIntegrationTechnicalProfileOverrides` entity based on its keys.
   * @param technicalProfileId Key property. See {@link FiscalIntegrationTechnicalProfileOverrides.technicalProfileId}.
   * @param storeId Key property. See {@link FiscalIntegrationTechnicalProfileOverrides.storeId}.
   * @param terminalId Key property. See {@link FiscalIntegrationTechnicalProfileOverrides.terminalId}.
   * @returns A request builder for creating requests to retrieve one `FiscalIntegrationTechnicalProfileOverrides` entity based on its keys.
   */
  getByKey(
    technicalProfileId: DeserializedType<T, 'Edm.String'>,
    storeId: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalIntegrationTechnicalProfileOverrides<T>, T> {
    return new GetByKeyRequestBuilder<
      FiscalIntegrationTechnicalProfileOverrides<T>,
      T
    >(this.entityApi, {
      TechnicalProfileId: technicalProfileId,
      StoreId: storeId,
      TerminalId: terminalId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalIntegrationTechnicalProfileOverrides`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalIntegrationTechnicalProfileOverrides`.
   */
  update(
    entity: FiscalIntegrationTechnicalProfileOverrides<T>
  ): UpdateRequestBuilder<FiscalIntegrationTechnicalProfileOverrides<T>, T> {
    return new UpdateRequestBuilder<
      FiscalIntegrationTechnicalProfileOverrides<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalIntegrationTechnicalProfileOverrides`.
   * @param technicalProfileId Key property. See {@link FiscalIntegrationTechnicalProfileOverrides.technicalProfileId}.
   * @param storeId Key property. See {@link FiscalIntegrationTechnicalProfileOverrides.storeId}.
   * @param terminalId Key property. See {@link FiscalIntegrationTechnicalProfileOverrides.terminalId}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalIntegrationTechnicalProfileOverrides`.
   */
  delete(
    technicalProfileId: string,
    storeId: string,
    terminalId: string
  ): DeleteRequestBuilder<FiscalIntegrationTechnicalProfileOverrides<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalIntegrationTechnicalProfileOverrides`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalIntegrationTechnicalProfileOverrides` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalIntegrationTechnicalProfileOverrides<T>
  ): DeleteRequestBuilder<FiscalIntegrationTechnicalProfileOverrides<T>, T>;
  delete(
    technicalProfileIdOrEntity: any,
    storeId?: string,
    terminalId?: string
  ): DeleteRequestBuilder<FiscalIntegrationTechnicalProfileOverrides<T>, T> {
    return new DeleteRequestBuilder<
      FiscalIntegrationTechnicalProfileOverrides<T>,
      T
    >(
      this.entityApi,
      technicalProfileIdOrEntity instanceof
      FiscalIntegrationTechnicalProfileOverrides
        ? technicalProfileIdOrEntity
        : {
            TechnicalProfileId: technicalProfileIdOrEntity!,
            StoreId: storeId!,
            TerminalId: terminalId!
          }
    );
  }
}
