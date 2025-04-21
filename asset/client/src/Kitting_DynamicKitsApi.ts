/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Kitting_DynamicKits } from './Kitting_DynamicKits';
import { Kitting_DynamicKitsRequestBuilder } from './Kitting_DynamicKitsRequestBuilder';
import { NoYes } from './NoYes';
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
export class Kitting_DynamicKitsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Kitting_DynamicKits<DeSerializersT>, DeSerializersT>
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
  ): Kitting_DynamicKitsApi<DeSerializersT> {
    return new Kitting_DynamicKitsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Kitting_DynamicKits;

  requestBuilder(): Kitting_DynamicKitsRequestBuilder<DeSerializersT> {
    return new Kitting_DynamicKitsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Kitting_DynamicKits<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Kitting_DynamicKits<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    Kitting_DynamicKits<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof Kitting_DynamicKits,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Kitting_DynamicKits,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Kitting_DynamicKits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DYNAMIC_KIT_ID: OrderableEdmTypeField<
      Kitting_DynamicKits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DYNAMIC_KIT_NAME: OrderableEdmTypeField<
      Kitting_DynamicKits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      Kitting_DynamicKits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_APPROVED: EnumField<
      Kitting_DynamicKits<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SITE_ID: OrderableEdmTypeField<
      Kitting_DynamicKits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Kitting_DynamicKits<DeSerializers>>;
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
         * Static representation of the {@link dynamicKitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DYNAMIC_KIT_ID: fieldBuilder.buildEdmTypeField(
          'DynamicKitId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dynamicKitName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DYNAMIC_KIT_NAME: fieldBuilder.buildEdmTypeField(
          'DynamicKitName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link approverPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ApproverPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isApproved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_APPROVED: fieldBuilder.buildEnumField('IsApproved', NoYes, true),
        /**
         * Static representation of the {@link siteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE_ID: fieldBuilder.buildEdmTypeField('SiteId', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Kitting_DynamicKits)
      };
    }

    return this._schema;
  }
}
