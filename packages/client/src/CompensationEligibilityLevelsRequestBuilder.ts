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
import { CompensationEligibilityLevels } from './CompensationEligibilityLevels';

/**
 * Request builder class for operations supported on the {@link CompensationEligibilityLevels} entity.
 */
export class CompensationEligibilityLevelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CompensationEligibilityLevels<T>, T> {
  /**
   * Returns a request builder for querying all `CompensationEligibilityLevels` entities.
   * @returns A request builder for creating requests to retrieve all `CompensationEligibilityLevels` entities.
   */
  getAll(): GetAllRequestBuilder<CompensationEligibilityLevels<T>, T> {
    return new GetAllRequestBuilder<CompensationEligibilityLevels<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CompensationEligibilityLevels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompensationEligibilityLevels`.
   */
  create(
    entity: CompensationEligibilityLevels<T>
  ): CreateRequestBuilder<CompensationEligibilityLevels<T>, T> {
    return new CreateRequestBuilder<CompensationEligibilityLevels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CompensationEligibilityLevels` entity based on its keys.
   * @param dataAreaId Key property. See {@link CompensationEligibilityLevels.dataAreaId}.
   * @param eligibilityId Key property. See {@link CompensationEligibilityLevels.eligibilityId}.
   * @param compensationLevelId Key property. See {@link CompensationEligibilityLevels.compensationLevelId}.
   * @returns A request builder for creating requests to retrieve one `CompensationEligibilityLevels` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    eligibilityId: DeserializedType<T, 'Edm.String'>,
    compensationLevelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CompensationEligibilityLevels<T>, T> {
    return new GetByKeyRequestBuilder<CompensationEligibilityLevels<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        EligibilityId: eligibilityId,
        CompensationLevelId: compensationLevelId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CompensationEligibilityLevels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompensationEligibilityLevels`.
   */
  update(
    entity: CompensationEligibilityLevels<T>
  ): UpdateRequestBuilder<CompensationEligibilityLevels<T>, T> {
    return new UpdateRequestBuilder<CompensationEligibilityLevels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CompensationEligibilityLevels`.
   * @param dataAreaId Key property. See {@link CompensationEligibilityLevels.dataAreaId}.
   * @param eligibilityId Key property. See {@link CompensationEligibilityLevels.eligibilityId}.
   * @param compensationLevelId Key property. See {@link CompensationEligibilityLevels.compensationLevelId}.
   * @returns A request builder for creating requests that delete an entity of type `CompensationEligibilityLevels`.
   */
  delete(
    dataAreaId: string,
    eligibilityId: string,
    compensationLevelId: string
  ): DeleteRequestBuilder<CompensationEligibilityLevels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CompensationEligibilityLevels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompensationEligibilityLevels` by taking the entity as a parameter.
   */
  delete(
    entity: CompensationEligibilityLevels<T>
  ): DeleteRequestBuilder<CompensationEligibilityLevels<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    eligibilityId?: string,
    compensationLevelId?: string
  ): DeleteRequestBuilder<CompensationEligibilityLevels<T>, T> {
    return new DeleteRequestBuilder<CompensationEligibilityLevels<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CompensationEligibilityLevels
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EligibilityId: eligibilityId!,
            CompensationLevelId: compensationLevelId!
          }
    );
  }
}
