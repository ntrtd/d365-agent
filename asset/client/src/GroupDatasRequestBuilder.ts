/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { GroupDatas } from './GroupDatas';
import { WarrantyGroupStatusType } from './WarrantyGroupStatusType';

/**
 * Request builder class for operations supported on the {@link GroupDatas} entity.
 */
export class GroupDatasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GroupDatas<T>, T> {
  /**
   * Returns a request builder for querying all `GroupDatas` entities.
   * @returns A request builder for creating requests to retrieve all `GroupDatas` entities.
   */
  getAll(): GetAllRequestBuilder<GroupDatas<T>, T> {
    return new GetAllRequestBuilder<GroupDatas<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `GroupDatas` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GroupDatas`.
   */
  create(entity: GroupDatas<T>): CreateRequestBuilder<GroupDatas<T>, T> {
    return new CreateRequestBuilder<GroupDatas<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `GroupDatas` entity based on its keys.
   * @param groupName Key property. See {@link GroupDatas.groupName}.
   * @param warrantyDataLineStatus Key property. See {@link GroupDatas.warrantyDataLineStatus}.
   * @param lineIdentifier Key property. See {@link GroupDatas.lineIdentifier}.
   * @returns A request builder for creating requests to retrieve one `GroupDatas` entity based on its keys.
   */
  getByKey(
    groupName: DeserializedType<T, 'Edm.String'>,
    warrantyDataLineStatus: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.WarrantyGroupStatusType'
    >,
    lineIdentifier: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<GroupDatas<T>, T> {
    return new GetByKeyRequestBuilder<GroupDatas<T>, T>(this.entityApi, {
      GroupName: groupName,
      WarrantyDataLineStatus: warrantyDataLineStatus,
      LineIdentifier: lineIdentifier
    });
  }

  /**
   * Returns a request builder for updating an entity of type `GroupDatas`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GroupDatas`.
   */
  update(entity: GroupDatas<T>): UpdateRequestBuilder<GroupDatas<T>, T> {
    return new UpdateRequestBuilder<GroupDatas<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `GroupDatas`.
   * @param groupName Key property. See {@link GroupDatas.groupName}.
   * @param warrantyDataLineStatus Key property. See {@link GroupDatas.warrantyDataLineStatus}.
   * @param lineIdentifier Key property. See {@link GroupDatas.lineIdentifier}.
   * @returns A request builder for creating requests that delete an entity of type `GroupDatas`.
   */
  delete(
    groupName: string,
    warrantyDataLineStatus: WarrantyGroupStatusType,
    lineIdentifier: BigNumber
  ): DeleteRequestBuilder<GroupDatas<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GroupDatas`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GroupDatas` by taking the entity as a parameter.
   */
  delete(entity: GroupDatas<T>): DeleteRequestBuilder<GroupDatas<T>, T>;
  delete(
    groupNameOrEntity: any,
    warrantyDataLineStatus?: WarrantyGroupStatusType,
    lineIdentifier?: BigNumber
  ): DeleteRequestBuilder<GroupDatas<T>, T> {
    return new DeleteRequestBuilder<GroupDatas<T>, T>(
      this.entityApi,
      groupNameOrEntity instanceof GroupDatas
        ? groupNameOrEntity
        : {
            GroupName: groupNameOrEntity!,
            WarrantyDataLineStatus: warrantyDataLineStatus!,
            LineIdentifier: lineIdentifier!
          }
    );
  }
}
