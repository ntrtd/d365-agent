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
import { WithholdItemGroups } from './WithholdItemGroups';

/**
 * Request builder class for operations supported on the {@link WithholdItemGroups} entity.
 */
export class WithholdItemGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdItemGroups<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdItemGroups` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdItemGroups` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdItemGroups<T>, T> {
    return new GetAllRequestBuilder<WithholdItemGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WithholdItemGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdItemGroups`.
   */
  create(
    entity: WithholdItemGroups<T>
  ): CreateRequestBuilder<WithholdItemGroups<T>, T> {
    return new CreateRequestBuilder<WithholdItemGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdItemGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link WithholdItemGroups.dataAreaId}.
   * @param taxWithholdItemGroup Key property. See {@link WithholdItemGroups.taxWithholdItemGroup}.
   * @param taxWithholdCode Key property. See {@link WithholdItemGroups.taxWithholdCode}.
   * @returns A request builder for creating requests to retrieve one `WithholdItemGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxWithholdItemGroup: DeserializedType<T, 'Edm.String'>,
    taxWithholdCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WithholdItemGroups<T>, T> {
    return new GetByKeyRequestBuilder<WithholdItemGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TaxWithholdItemGroup: taxWithholdItemGroup,
        TaxWithholdCode: taxWithholdCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdItemGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdItemGroups`.
   */
  update(
    entity: WithholdItemGroups<T>
  ): UpdateRequestBuilder<WithholdItemGroups<T>, T> {
    return new UpdateRequestBuilder<WithholdItemGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdItemGroups`.
   * @param dataAreaId Key property. See {@link WithholdItemGroups.dataAreaId}.
   * @param taxWithholdItemGroup Key property. See {@link WithholdItemGroups.taxWithholdItemGroup}.
   * @param taxWithholdCode Key property. See {@link WithholdItemGroups.taxWithholdCode}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdItemGroups`.
   */
  delete(
    dataAreaId: string,
    taxWithholdItemGroup: string,
    taxWithholdCode: string
  ): DeleteRequestBuilder<WithholdItemGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdItemGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdItemGroups` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdItemGroups<T>
  ): DeleteRequestBuilder<WithholdItemGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxWithholdItemGroup?: string,
    taxWithholdCode?: string
  ): DeleteRequestBuilder<WithholdItemGroups<T>, T> {
    return new DeleteRequestBuilder<WithholdItemGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WithholdItemGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxWithholdItemGroup: taxWithholdItemGroup!,
            TaxWithholdCode: taxWithholdCode!
          }
    );
  }
}
