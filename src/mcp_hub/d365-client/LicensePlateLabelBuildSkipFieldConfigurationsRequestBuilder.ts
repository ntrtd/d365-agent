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
import { LicensePlateLabelBuildSkipFieldConfigurations } from './LicensePlateLabelBuildSkipFieldConfigurations';

/**
 * Request builder class for operations supported on the {@link LicensePlateLabelBuildSkipFieldConfigurations} entity.
 */
export class LicensePlateLabelBuildSkipFieldConfigurationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LicensePlateLabelBuildSkipFieldConfigurations<T>, T> {
  /**
   * Returns a request builder for querying all `LicensePlateLabelBuildSkipFieldConfigurations` entities.
   * @returns A request builder for creating requests to retrieve all `LicensePlateLabelBuildSkipFieldConfigurations` entities.
   */
  getAll(): GetAllRequestBuilder<
    LicensePlateLabelBuildSkipFieldConfigurations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      LicensePlateLabelBuildSkipFieldConfigurations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LicensePlateLabelBuildSkipFieldConfigurations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LicensePlateLabelBuildSkipFieldConfigurations`.
   */
  create(
    entity: LicensePlateLabelBuildSkipFieldConfigurations<T>
  ): CreateRequestBuilder<LicensePlateLabelBuildSkipFieldConfigurations<T>, T> {
    return new CreateRequestBuilder<
      LicensePlateLabelBuildSkipFieldConfigurations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `LicensePlateLabelBuildSkipFieldConfigurations` entity based on its keys.
   * @param dataAreaId Key property. See {@link LicensePlateLabelBuildSkipFieldConfigurations.dataAreaId}.
   * @param licensePlateLabelBuildConfigurationId Key property. See {@link LicensePlateLabelBuildSkipFieldConfigurations.licensePlateLabelBuildConfigurationId}.
   * @param skipFieldName Key property. See {@link LicensePlateLabelBuildSkipFieldConfigurations.skipFieldName}.
   * @returns A request builder for creating requests to retrieve one `LicensePlateLabelBuildSkipFieldConfigurations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    licensePlateLabelBuildConfigurationId: DeserializedType<T, 'Edm.String'>,
    skipFieldName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    LicensePlateLabelBuildSkipFieldConfigurations<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      LicensePlateLabelBuildSkipFieldConfigurations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LicensePlateLabelBuildConfigurationId:
        licensePlateLabelBuildConfigurationId,
      SkipFieldName: skipFieldName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LicensePlateLabelBuildSkipFieldConfigurations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LicensePlateLabelBuildSkipFieldConfigurations`.
   */
  update(
    entity: LicensePlateLabelBuildSkipFieldConfigurations<T>
  ): UpdateRequestBuilder<LicensePlateLabelBuildSkipFieldConfigurations<T>, T> {
    return new UpdateRequestBuilder<
      LicensePlateLabelBuildSkipFieldConfigurations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LicensePlateLabelBuildSkipFieldConfigurations`.
   * @param dataAreaId Key property. See {@link LicensePlateLabelBuildSkipFieldConfigurations.dataAreaId}.
   * @param licensePlateLabelBuildConfigurationId Key property. See {@link LicensePlateLabelBuildSkipFieldConfigurations.licensePlateLabelBuildConfigurationId}.
   * @param skipFieldName Key property. See {@link LicensePlateLabelBuildSkipFieldConfigurations.skipFieldName}.
   * @returns A request builder for creating requests that delete an entity of type `LicensePlateLabelBuildSkipFieldConfigurations`.
   */
  delete(
    dataAreaId: string,
    licensePlateLabelBuildConfigurationId: string,
    skipFieldName: string
  ): DeleteRequestBuilder<LicensePlateLabelBuildSkipFieldConfigurations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LicensePlateLabelBuildSkipFieldConfigurations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LicensePlateLabelBuildSkipFieldConfigurations` by taking the entity as a parameter.
   */
  delete(
    entity: LicensePlateLabelBuildSkipFieldConfigurations<T>
  ): DeleteRequestBuilder<LicensePlateLabelBuildSkipFieldConfigurations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    licensePlateLabelBuildConfigurationId?: string,
    skipFieldName?: string
  ): DeleteRequestBuilder<LicensePlateLabelBuildSkipFieldConfigurations<T>, T> {
    return new DeleteRequestBuilder<
      LicensePlateLabelBuildSkipFieldConfigurations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      LicensePlateLabelBuildSkipFieldConfigurations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LicensePlateLabelBuildConfigurationId:
              licensePlateLabelBuildConfigurationId!,
            SkipFieldName: skipFieldName!
          }
    );
  }
}
