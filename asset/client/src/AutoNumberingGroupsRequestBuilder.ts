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
import { AutoNumberingGroups } from './AutoNumberingGroups';
import { DocNumberingModuleW } from './DocNumberingModuleW';
import { LtInvoiceAllGroup } from './LtInvoiceAllGroup';
import { LtInvoiceAutoNumberingType } from './LtInvoiceAutoNumberingType';

/**
 * Request builder class for operations supported on the {@link AutoNumberingGroups} entity.
 */
export class AutoNumberingGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AutoNumberingGroups<T>, T> {
  /**
   * Returns a request builder for querying all `AutoNumberingGroups` entities.
   * @returns A request builder for creating requests to retrieve all `AutoNumberingGroups` entities.
   */
  getAll(): GetAllRequestBuilder<AutoNumberingGroups<T>, T> {
    return new GetAllRequestBuilder<AutoNumberingGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AutoNumberingGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AutoNumberingGroups`.
   */
  create(
    entity: AutoNumberingGroups<T>
  ): CreateRequestBuilder<AutoNumberingGroups<T>, T> {
    return new CreateRequestBuilder<AutoNumberingGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AutoNumberingGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link AutoNumberingGroups.dataAreaId}.
   * @param module Key property. See {@link AutoNumberingGroups.module}.
   * @param accountCode Key property. See {@link AutoNumberingGroups.accountCode}.
   * @param code Key property. See {@link AutoNumberingGroups.code}.
   * @param type Key property. See {@link AutoNumberingGroups.type}.
   * @returns A request builder for creating requests to retrieve one `AutoNumberingGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    module: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.DocNumberingModule_W'
    >,
    accountCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LtInvoiceAllGroup'
    >,
    code: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LtInvoiceAutoNumberingType'
    >
  ): GetByKeyRequestBuilder<AutoNumberingGroups<T>, T> {
    return new GetByKeyRequestBuilder<AutoNumberingGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Module: module,
        AccountCode: accountCode,
        Code: code,
        Type: type
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AutoNumberingGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AutoNumberingGroups`.
   */
  update(
    entity: AutoNumberingGroups<T>
  ): UpdateRequestBuilder<AutoNumberingGroups<T>, T> {
    return new UpdateRequestBuilder<AutoNumberingGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AutoNumberingGroups`.
   * @param dataAreaId Key property. See {@link AutoNumberingGroups.dataAreaId}.
   * @param module Key property. See {@link AutoNumberingGroups.module}.
   * @param accountCode Key property. See {@link AutoNumberingGroups.accountCode}.
   * @param code Key property. See {@link AutoNumberingGroups.code}.
   * @param type Key property. See {@link AutoNumberingGroups.type}.
   * @returns A request builder for creating requests that delete an entity of type `AutoNumberingGroups`.
   */
  delete(
    dataAreaId: string,
    module: DocNumberingModuleW,
    accountCode: LtInvoiceAllGroup,
    code: string,
    type: LtInvoiceAutoNumberingType
  ): DeleteRequestBuilder<AutoNumberingGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AutoNumberingGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AutoNumberingGroups` by taking the entity as a parameter.
   */
  delete(
    entity: AutoNumberingGroups<T>
  ): DeleteRequestBuilder<AutoNumberingGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    module?: DocNumberingModuleW,
    accountCode?: LtInvoiceAllGroup,
    code?: string,
    type?: LtInvoiceAutoNumberingType
  ): DeleteRequestBuilder<AutoNumberingGroups<T>, T> {
    return new DeleteRequestBuilder<AutoNumberingGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AutoNumberingGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Module: module!,
            AccountCode: accountCode!,
            Code: code!,
            Type: type!
          }
    );
  }
}
