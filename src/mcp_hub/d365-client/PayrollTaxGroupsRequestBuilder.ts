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
import { PayrollTaxGroups } from './PayrollTaxGroups';

/**
 * Request builder class for operations supported on the {@link PayrollTaxGroups} entity.
 */
export class PayrollTaxGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayrollTaxGroups<T>, T> {
  /**
   * Returns a request builder for querying all `PayrollTaxGroups` entities.
   * @returns A request builder for creating requests to retrieve all `PayrollTaxGroups` entities.
   */
  getAll(): GetAllRequestBuilder<PayrollTaxGroups<T>, T> {
    return new GetAllRequestBuilder<PayrollTaxGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayrollTaxGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayrollTaxGroups`.
   */
  create(
    entity: PayrollTaxGroups<T>
  ): CreateRequestBuilder<PayrollTaxGroups<T>, T> {
    return new CreateRequestBuilder<PayrollTaxGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayrollTaxGroups` entity based on its keys.
   * @param groupId Key property. See {@link PayrollTaxGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `PayrollTaxGroups` entity based on its keys.
   */
  getByKey(
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayrollTaxGroups<T>, T> {
    return new GetByKeyRequestBuilder<PayrollTaxGroups<T>, T>(this.entityApi, {
      GroupId: groupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PayrollTaxGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayrollTaxGroups`.
   */
  update(
    entity: PayrollTaxGroups<T>
  ): UpdateRequestBuilder<PayrollTaxGroups<T>, T> {
    return new UpdateRequestBuilder<PayrollTaxGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayrollTaxGroups`.
   * @param groupId Key property. See {@link PayrollTaxGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `PayrollTaxGroups`.
   */
  delete(groupId: string): DeleteRequestBuilder<PayrollTaxGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayrollTaxGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayrollTaxGroups` by taking the entity as a parameter.
   */
  delete(
    entity: PayrollTaxGroups<T>
  ): DeleteRequestBuilder<PayrollTaxGroups<T>, T>;
  delete(groupIdOrEntity: any): DeleteRequestBuilder<PayrollTaxGroups<T>, T> {
    return new DeleteRequestBuilder<PayrollTaxGroups<T>, T>(
      this.entityApi,
      groupIdOrEntity instanceof PayrollTaxGroups
        ? groupIdOrEntity
        : { GroupId: groupIdOrEntity! }
    );
  }
}
