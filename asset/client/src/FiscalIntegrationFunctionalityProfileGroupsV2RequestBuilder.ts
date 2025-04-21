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
import { FiscalIntegrationFunctionalityProfileGroupsV2 } from './FiscalIntegrationFunctionalityProfileGroupsV2';

/**
 * Request builder class for operations supported on the {@link FiscalIntegrationFunctionalityProfileGroupsV2} entity.
 */
export class FiscalIntegrationFunctionalityProfileGroupsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalIntegrationFunctionalityProfileGroupsV2<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalIntegrationFunctionalityProfileGroupsV2` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalIntegrationFunctionalityProfileGroupsV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    FiscalIntegrationFunctionalityProfileGroupsV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      FiscalIntegrationFunctionalityProfileGroupsV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalIntegrationFunctionalityProfileGroupsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalIntegrationFunctionalityProfileGroupsV2`.
   */
  create(
    entity: FiscalIntegrationFunctionalityProfileGroupsV2<T>
  ): CreateRequestBuilder<FiscalIntegrationFunctionalityProfileGroupsV2<T>, T> {
    return new CreateRequestBuilder<
      FiscalIntegrationFunctionalityProfileGroupsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FiscalIntegrationFunctionalityProfileGroupsV2` entity based on its keys.
   * @param groupNumber Key property. See {@link FiscalIntegrationFunctionalityProfileGroupsV2.groupNumber}.
   * @param profileNumber Key property. See {@link FiscalIntegrationFunctionalityProfileGroupsV2.profileNumber}.
   * @param company Key property. See {@link FiscalIntegrationFunctionalityProfileGroupsV2.company}.
   * @returns A request builder for creating requests to retrieve one `FiscalIntegrationFunctionalityProfileGroupsV2` entity based on its keys.
   */
  getByKey(
    groupNumber: DeserializedType<T, 'Edm.String'>,
    profileNumber: DeserializedType<T, 'Edm.String'>,
    company: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    FiscalIntegrationFunctionalityProfileGroupsV2<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      FiscalIntegrationFunctionalityProfileGroupsV2<T>,
      T
    >(this.entityApi, {
      GroupNumber: groupNumber,
      ProfileNumber: profileNumber,
      Company: company
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalIntegrationFunctionalityProfileGroupsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalIntegrationFunctionalityProfileGroupsV2`.
   */
  update(
    entity: FiscalIntegrationFunctionalityProfileGroupsV2<T>
  ): UpdateRequestBuilder<FiscalIntegrationFunctionalityProfileGroupsV2<T>, T> {
    return new UpdateRequestBuilder<
      FiscalIntegrationFunctionalityProfileGroupsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalIntegrationFunctionalityProfileGroupsV2`.
   * @param groupNumber Key property. See {@link FiscalIntegrationFunctionalityProfileGroupsV2.groupNumber}.
   * @param profileNumber Key property. See {@link FiscalIntegrationFunctionalityProfileGroupsV2.profileNumber}.
   * @param company Key property. See {@link FiscalIntegrationFunctionalityProfileGroupsV2.company}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalIntegrationFunctionalityProfileGroupsV2`.
   */
  delete(
    groupNumber: string,
    profileNumber: string,
    company: string
  ): DeleteRequestBuilder<FiscalIntegrationFunctionalityProfileGroupsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalIntegrationFunctionalityProfileGroupsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalIntegrationFunctionalityProfileGroupsV2` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalIntegrationFunctionalityProfileGroupsV2<T>
  ): DeleteRequestBuilder<FiscalIntegrationFunctionalityProfileGroupsV2<T>, T>;
  delete(
    groupNumberOrEntity: any,
    profileNumber?: string,
    company?: string
  ): DeleteRequestBuilder<FiscalIntegrationFunctionalityProfileGroupsV2<T>, T> {
    return new DeleteRequestBuilder<
      FiscalIntegrationFunctionalityProfileGroupsV2<T>,
      T
    >(
      this.entityApi,
      groupNumberOrEntity instanceof
      FiscalIntegrationFunctionalityProfileGroupsV2
        ? groupNumberOrEntity
        : {
            GroupNumber: groupNumberOrEntity!,
            ProfileNumber: profileNumber!,
            Company: company!
          }
    );
  }
}
