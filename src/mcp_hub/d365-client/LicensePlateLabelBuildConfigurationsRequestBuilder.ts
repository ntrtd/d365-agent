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
import { LicensePlateLabelBuildConfigurations } from './LicensePlateLabelBuildConfigurations';

/**
 * Request builder class for operations supported on the {@link LicensePlateLabelBuildConfigurations} entity.
 */
export class LicensePlateLabelBuildConfigurationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LicensePlateLabelBuildConfigurations<T>, T> {
  /**
   * Returns a request builder for querying all `LicensePlateLabelBuildConfigurations` entities.
   * @returns A request builder for creating requests to retrieve all `LicensePlateLabelBuildConfigurations` entities.
   */
  getAll(): GetAllRequestBuilder<LicensePlateLabelBuildConfigurations<T>, T> {
    return new GetAllRequestBuilder<LicensePlateLabelBuildConfigurations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LicensePlateLabelBuildConfigurations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LicensePlateLabelBuildConfigurations`.
   */
  create(
    entity: LicensePlateLabelBuildConfigurations<T>
  ): CreateRequestBuilder<LicensePlateLabelBuildConfigurations<T>, T> {
    return new CreateRequestBuilder<LicensePlateLabelBuildConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LicensePlateLabelBuildConfigurations` entity based on its keys.
   * @param dataAreaId Key property. See {@link LicensePlateLabelBuildConfigurations.dataAreaId}.
   * @param licensePlateLabelBuildConfigurationId Key property. See {@link LicensePlateLabelBuildConfigurations.licensePlateLabelBuildConfigurationId}.
   * @returns A request builder for creating requests to retrieve one `LicensePlateLabelBuildConfigurations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    licensePlateLabelBuildConfigurationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LicensePlateLabelBuildConfigurations<T>, T> {
    return new GetByKeyRequestBuilder<
      LicensePlateLabelBuildConfigurations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LicensePlateLabelBuildConfigurationId:
        licensePlateLabelBuildConfigurationId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LicensePlateLabelBuildConfigurations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LicensePlateLabelBuildConfigurations`.
   */
  update(
    entity: LicensePlateLabelBuildConfigurations<T>
  ): UpdateRequestBuilder<LicensePlateLabelBuildConfigurations<T>, T> {
    return new UpdateRequestBuilder<LicensePlateLabelBuildConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LicensePlateLabelBuildConfigurations`.
   * @param dataAreaId Key property. See {@link LicensePlateLabelBuildConfigurations.dataAreaId}.
   * @param licensePlateLabelBuildConfigurationId Key property. See {@link LicensePlateLabelBuildConfigurations.licensePlateLabelBuildConfigurationId}.
   * @returns A request builder for creating requests that delete an entity of type `LicensePlateLabelBuildConfigurations`.
   */
  delete(
    dataAreaId: string,
    licensePlateLabelBuildConfigurationId: string
  ): DeleteRequestBuilder<LicensePlateLabelBuildConfigurations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LicensePlateLabelBuildConfigurations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LicensePlateLabelBuildConfigurations` by taking the entity as a parameter.
   */
  delete(
    entity: LicensePlateLabelBuildConfigurations<T>
  ): DeleteRequestBuilder<LicensePlateLabelBuildConfigurations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    licensePlateLabelBuildConfigurationId?: string
  ): DeleteRequestBuilder<LicensePlateLabelBuildConfigurations<T>, T> {
    return new DeleteRequestBuilder<LicensePlateLabelBuildConfigurations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LicensePlateLabelBuildConfigurations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LicensePlateLabelBuildConfigurationId:
              licensePlateLabelBuildConfigurationId!
          }
    );
  }
}
