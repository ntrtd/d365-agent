/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OperationStatuses } from './OperationStatuses';
import { OperationStatusesRequestBuilder } from './OperationStatusesRequestBuilder';
import { FiasOperationTypeRu } from './FiasOperationTypeRu';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class OperationStatusesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<OperationStatuses<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): OperationStatusesApi<DeSerializersT> {
    return new OperationStatusesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = OperationStatuses;

  requestBuilder(): OperationStatusesRequestBuilder<DeSerializersT> {
    return new OperationStatusesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    OperationStatuses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<OperationStatuses<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<OperationStatuses<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof OperationStatuses,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OperationStatuses,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      OperationStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATION_STATUS: OrderableEdmTypeField<
      OperationStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIAS_OPERATION_TYPE_RU: EnumField<
      OperationStatuses<DeSerializers>,
      DeSerializersT,
      FiasOperationTypeRu,
      true,
      true
    >;
    OPERATION_DESCRIPTION: OrderableEdmTypeField<
      OperationStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<OperationStatuses<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link operationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_STATUS: fieldBuilder.buildEdmTypeField(
          'OperationStatus',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiasOperationTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIAS_OPERATION_TYPE_RU: fieldBuilder.buildEnumField(
          'FiasOperationType_RU',
          FiasOperationTypeRu,
          true
        ),
        /**
         * Static representation of the {@link operationDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'OperationDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OperationStatuses)
      };
    }

    return this._schema;
  }
}
