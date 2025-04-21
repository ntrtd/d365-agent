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
import { FiscalIntegrationFunctionalityProfileGroups } from './FiscalIntegrationFunctionalityProfileGroups';

/**
 * Request builder class for operations supported on the {@link FiscalIntegrationFunctionalityProfileGroups} entity.
 */
export class FiscalIntegrationFunctionalityProfileGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalIntegrationFunctionalityProfileGroups<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalIntegrationFunctionalityProfileGroups` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalIntegrationFunctionalityProfileGroups` entities.
   */
  getAll(): GetAllRequestBuilder<
    FiscalIntegrationFunctionalityProfileGroups<T>,
    T
  > {
    return new GetAllRequestBuilder<
      FiscalIntegrationFunctionalityProfileGroups<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalIntegrationFunctionalityProfileGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalIntegrationFunctionalityProfileGroups`.
   */
  create(
    entity: FiscalIntegrationFunctionalityProfileGroups<T>
  ): CreateRequestBuilder<FiscalIntegrationFunctionalityProfileGroups<T>, T> {
    return new CreateRequestBuilder<
      FiscalIntegrationFunctionalityProfileGroups<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FiscalIntegrationFunctionalityProfileGroups` entity based on its keys.
   * @param groupNumber Key property. See {@link FiscalIntegrationFunctionalityProfileGroups.groupNumber}.
   * @param profileNumber Key property. See {@link FiscalIntegrationFunctionalityProfileGroups.profileNumber}.
   * @returns A request builder for creating requests to retrieve one `FiscalIntegrationFunctionalityProfileGroups` entity based on its keys.
   */
  getByKey(
    groupNumber: DeserializedType<T, 'Edm.String'>,
    profileNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalIntegrationFunctionalityProfileGroups<T>, T> {
    return new GetByKeyRequestBuilder<
      FiscalIntegrationFunctionalityProfileGroups<T>,
      T
    >(this.entityApi, {
      GroupNumber: groupNumber,
      ProfileNumber: profileNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalIntegrationFunctionalityProfileGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalIntegrationFunctionalityProfileGroups`.
   */
  update(
    entity: FiscalIntegrationFunctionalityProfileGroups<T>
  ): UpdateRequestBuilder<FiscalIntegrationFunctionalityProfileGroups<T>, T> {
    return new UpdateRequestBuilder<
      FiscalIntegrationFunctionalityProfileGroups<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalIntegrationFunctionalityProfileGroups`.
   * @param groupNumber Key property. See {@link FiscalIntegrationFunctionalityProfileGroups.groupNumber}.
   * @param profileNumber Key property. See {@link FiscalIntegrationFunctionalityProfileGroups.profileNumber}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalIntegrationFunctionalityProfileGroups`.
   */
  delete(
    groupNumber: string,
    profileNumber: string
  ): DeleteRequestBuilder<FiscalIntegrationFunctionalityProfileGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalIntegrationFunctionalityProfileGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalIntegrationFunctionalityProfileGroups` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalIntegrationFunctionalityProfileGroups<T>
  ): DeleteRequestBuilder<FiscalIntegrationFunctionalityProfileGroups<T>, T>;
  delete(
    groupNumberOrEntity: any,
    profileNumber?: string
  ): DeleteRequestBuilder<FiscalIntegrationFunctionalityProfileGroups<T>, T> {
    return new DeleteRequestBuilder<
      FiscalIntegrationFunctionalityProfileGroups<T>,
      T
    >(
      this.entityApi,
      groupNumberOrEntity instanceof FiscalIntegrationFunctionalityProfileGroups
        ? groupNumberOrEntity
        : {
            GroupNumber: groupNumberOrEntity!,
            ProfileNumber: profileNumber!
          }
    );
  }
}
