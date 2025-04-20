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
import { Relations_Br } from './Relations_Br';
import { ConfRelationshipsBr } from './ConfRelationshipsBr';

/**
 * Request builder class for operations supported on the {@link Relations_Br} entity.
 */
export class Relations_BrRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Relations_Br<T>, T> {
  /**
   * Returns a request builder for querying all `Relations_Br` entities.
   * @returns A request builder for creating requests to retrieve all `Relations_Br` entities.
   */
  getAll(): GetAllRequestBuilder<Relations_Br<T>, T> {
    return new GetAllRequestBuilder<Relations_Br<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Relations_Br` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Relations_Br`.
   */
  create(entity: Relations_Br<T>): CreateRequestBuilder<Relations_Br<T>, T> {
    return new CreateRequestBuilder<Relations_Br<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Relations_Br` entity based on its keys.
   * @param dataAreaId Key property. See {@link Relations_Br.dataAreaId}.
   * @param definitionGroupId Key property. See {@link Relations_Br.definitionGroupId}.
   * @param fixedValue Key property. See {@link Relations_Br.fixedValue}.
   * @param relatedField Key property. See {@link Relations_Br.relatedField}.
   * @param relatedTable Key property. See {@link Relations_Br.relatedTable}.
   * @param relationshipType Key property. See {@link Relations_Br.relationshipType}.
   * @param sourceFieldName Key property. See {@link Relations_Br.sourceFieldName}.
   * @param sourceTableName Key property. See {@link Relations_Br.sourceTableName}.
   * @returns A request builder for creating requests to retrieve one `Relations_Br` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    definitionGroupId: DeserializedType<T, 'Edm.String'>,
    fixedValue: DeserializedType<T, 'Edm.Int32'>,
    relatedField: DeserializedType<T, 'Edm.String'>,
    relatedTable: DeserializedType<T, 'Edm.String'>,
    relationshipType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ConfRelationships_BR'
    >,
    sourceFieldName: DeserializedType<T, 'Edm.String'>,
    sourceTableName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Relations_Br<T>, T> {
    return new GetByKeyRequestBuilder<Relations_Br<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      DefinitionGroupId: definitionGroupId,
      FixedValue: fixedValue,
      RelatedField: relatedField,
      RelatedTable: relatedTable,
      RelationshipType: relationshipType,
      SourceFieldName: sourceFieldName,
      SourceTableName: sourceTableName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Relations_Br`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Relations_Br`.
   */
  update(entity: Relations_Br<T>): UpdateRequestBuilder<Relations_Br<T>, T> {
    return new UpdateRequestBuilder<Relations_Br<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Relations_Br`.
   * @param dataAreaId Key property. See {@link Relations_Br.dataAreaId}.
   * @param definitionGroupId Key property. See {@link Relations_Br.definitionGroupId}.
   * @param fixedValue Key property. See {@link Relations_Br.fixedValue}.
   * @param relatedField Key property. See {@link Relations_Br.relatedField}.
   * @param relatedTable Key property. See {@link Relations_Br.relatedTable}.
   * @param relationshipType Key property. See {@link Relations_Br.relationshipType}.
   * @param sourceFieldName Key property. See {@link Relations_Br.sourceFieldName}.
   * @param sourceTableName Key property. See {@link Relations_Br.sourceTableName}.
   * @returns A request builder for creating requests that delete an entity of type `Relations_Br`.
   */
  delete(
    dataAreaId: string,
    definitionGroupId: string,
    fixedValue: number,
    relatedField: string,
    relatedTable: string,
    relationshipType: ConfRelationshipsBr,
    sourceFieldName: string,
    sourceTableName: string
  ): DeleteRequestBuilder<Relations_Br<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Relations_Br`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Relations_Br` by taking the entity as a parameter.
   */
  delete(entity: Relations_Br<T>): DeleteRequestBuilder<Relations_Br<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    definitionGroupId?: string,
    fixedValue?: number,
    relatedField?: string,
    relatedTable?: string,
    relationshipType?: ConfRelationshipsBr,
    sourceFieldName?: string,
    sourceTableName?: string
  ): DeleteRequestBuilder<Relations_Br<T>, T> {
    return new DeleteRequestBuilder<Relations_Br<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Relations_Br
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DefinitionGroupId: definitionGroupId!,
            FixedValue: fixedValue!,
            RelatedField: relatedField!,
            RelatedTable: relatedTable!,
            RelationshipType: relationshipType!,
            SourceFieldName: sourceFieldName!,
            SourceTableName: sourceTableName!
          }
    );
  }
}
