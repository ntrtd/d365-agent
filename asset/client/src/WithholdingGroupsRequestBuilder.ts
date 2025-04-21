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
import { WithholdingGroups } from './WithholdingGroups';

/**
 * Request builder class for operations supported on the {@link WithholdingGroups} entity.
 */
export class WithholdingGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdingGroups<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdingGroups` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdingGroups` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdingGroups<T>, T> {
    return new GetAllRequestBuilder<WithholdingGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WithholdingGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdingGroups`.
   */
  create(
    entity: WithholdingGroups<T>
  ): CreateRequestBuilder<WithholdingGroups<T>, T> {
    return new CreateRequestBuilder<WithholdingGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdingGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link WithholdingGroups.dataAreaId}.
   * @param withholdingTaxGroupCode Key property. See {@link WithholdingGroups.withholdingTaxGroupCode}.
   * @returns A request builder for creating requests to retrieve one `WithholdingGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    withholdingTaxGroupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WithholdingGroups<T>, T> {
    return new GetByKeyRequestBuilder<WithholdingGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      WithholdingTaxGroupCode: withholdingTaxGroupCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdingGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdingGroups`.
   */
  update(
    entity: WithholdingGroups<T>
  ): UpdateRequestBuilder<WithholdingGroups<T>, T> {
    return new UpdateRequestBuilder<WithholdingGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdingGroups`.
   * @param dataAreaId Key property. See {@link WithholdingGroups.dataAreaId}.
   * @param withholdingTaxGroupCode Key property. See {@link WithholdingGroups.withholdingTaxGroupCode}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdingGroups`.
   */
  delete(
    dataAreaId: string,
    withholdingTaxGroupCode: string
  ): DeleteRequestBuilder<WithholdingGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdingGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdingGroups` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdingGroups<T>
  ): DeleteRequestBuilder<WithholdingGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    withholdingTaxGroupCode?: string
  ): DeleteRequestBuilder<WithholdingGroups<T>, T> {
    return new DeleteRequestBuilder<WithholdingGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WithholdingGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WithholdingTaxGroupCode: withholdingTaxGroupCode!
          }
    );
  }
}
