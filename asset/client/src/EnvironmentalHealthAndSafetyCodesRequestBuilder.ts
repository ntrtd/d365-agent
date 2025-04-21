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
import { EnvironmentalHealthAndSafetyCodes } from './EnvironmentalHealthAndSafetyCodes';

/**
 * Request builder class for operations supported on the {@link EnvironmentalHealthAndSafetyCodes} entity.
 */
export class EnvironmentalHealthAndSafetyCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EnvironmentalHealthAndSafetyCodes<T>, T> {
  /**
   * Returns a request builder for querying all `EnvironmentalHealthAndSafetyCodes` entities.
   * @returns A request builder for creating requests to retrieve all `EnvironmentalHealthAndSafetyCodes` entities.
   */
  getAll(): GetAllRequestBuilder<EnvironmentalHealthAndSafetyCodes<T>, T> {
    return new GetAllRequestBuilder<EnvironmentalHealthAndSafetyCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EnvironmentalHealthAndSafetyCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EnvironmentalHealthAndSafetyCodes`.
   */
  create(
    entity: EnvironmentalHealthAndSafetyCodes<T>
  ): CreateRequestBuilder<EnvironmentalHealthAndSafetyCodes<T>, T> {
    return new CreateRequestBuilder<EnvironmentalHealthAndSafetyCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EnvironmentalHealthAndSafetyCodes` entity based on its keys.
   * @param environmentalHealthAndSafetyCode Key property. See {@link EnvironmentalHealthAndSafetyCodes.environmentalHealthAndSafetyCode}.
   * @returns A request builder for creating requests to retrieve one `EnvironmentalHealthAndSafetyCodes` entity based on its keys.
   */
  getByKey(
    environmentalHealthAndSafetyCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EnvironmentalHealthAndSafetyCodes<T>, T> {
    return new GetByKeyRequestBuilder<EnvironmentalHealthAndSafetyCodes<T>, T>(
      this.entityApi,
      { EnvironmentalHealthAndSafetyCode: environmentalHealthAndSafetyCode }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EnvironmentalHealthAndSafetyCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EnvironmentalHealthAndSafetyCodes`.
   */
  update(
    entity: EnvironmentalHealthAndSafetyCodes<T>
  ): UpdateRequestBuilder<EnvironmentalHealthAndSafetyCodes<T>, T> {
    return new UpdateRequestBuilder<EnvironmentalHealthAndSafetyCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EnvironmentalHealthAndSafetyCodes`.
   * @param environmentalHealthAndSafetyCode Key property. See {@link EnvironmentalHealthAndSafetyCodes.environmentalHealthAndSafetyCode}.
   * @returns A request builder for creating requests that delete an entity of type `EnvironmentalHealthAndSafetyCodes`.
   */
  delete(
    environmentalHealthAndSafetyCode: string
  ): DeleteRequestBuilder<EnvironmentalHealthAndSafetyCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EnvironmentalHealthAndSafetyCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EnvironmentalHealthAndSafetyCodes` by taking the entity as a parameter.
   */
  delete(
    entity: EnvironmentalHealthAndSafetyCodes<T>
  ): DeleteRequestBuilder<EnvironmentalHealthAndSafetyCodes<T>, T>;
  delete(
    environmentalHealthAndSafetyCodeOrEntity: any
  ): DeleteRequestBuilder<EnvironmentalHealthAndSafetyCodes<T>, T> {
    return new DeleteRequestBuilder<EnvironmentalHealthAndSafetyCodes<T>, T>(
      this.entityApi,
      environmentalHealthAndSafetyCodeOrEntity instanceof
      EnvironmentalHealthAndSafetyCodes
        ? environmentalHealthAndSafetyCodeOrEntity
        : {
            EnvironmentalHealthAndSafetyCode:
              environmentalHealthAndSafetyCodeOrEntity!
          }
    );
  }
}
